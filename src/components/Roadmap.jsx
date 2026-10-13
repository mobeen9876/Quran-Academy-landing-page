import { useEffect, useRef } from 'react'

const TOTAL = 30
const COMPLETED = 15
const CURRENT = 15

export default function Roadmap() {
  const svgRef = useRef(null)
  const baseRef = useRef(null)
  const progressRef = useRef(null)
  const nodesRef = useRef(null)

  useEffect(() => {
    const base = baseRef.current
    const progress = progressRef.current
    const nodesG = nodesRef.current
    if (!base || !progress || !nodesG) return

    const svgNS = 'http://www.w3.org/2000/svg'
    const len = base.getTotalLength()
    progress.style.strokeDasharray = len
    progress.style.strokeDashoffset = len

    // clear any previous nodes (React StrictMode double-effect)
    while (nodesG.firstChild) nodesG.removeChild(nodesG.firstChild)

    const labelQueue = []

    for (let i = 0; i < TOTAL; i++) {
      const frac = i / (TOTAL - 1)
      const pt = base.getPointAtLength(frac * len)
      const above = Math.floor(i / 2) % 2 === 0

      if (i < COMPLETED) {
        const doneC = document.createElementNS(svgNS, 'circle')
        doneC.setAttribute('cx', pt.x); doneC.setAttribute('cy', pt.y); doneC.setAttribute('r', 7)
        doneC.setAttribute('fill', '#12A86B'); doneC.setAttribute('stroke', '#fff'); doneC.setAttribute('stroke-width', 1.5)
        nodesG.appendChild(doneC)

        const chk = document.createElementNS(svgNS, 'path')
        chk.setAttribute('d', `M${pt.x - 3},${pt.y} l2,2.2 l4.2,-4.4`)
        chk.setAttribute('stroke', '#fff'); chk.setAttribute('stroke-width', 1.6)
        chk.setAttribute('fill', 'none'); chk.setAttribute('stroke-linecap', 'round'); chk.setAttribute('stroke-linejoin', 'round')
        nodesG.appendChild(chk)
      } else if (i === CURRENT) {
        const curC = document.createElementNS(svgNS, 'circle')
        curC.setAttribute('cx', pt.x); curC.setAttribute('cy', pt.y); curC.setAttribute('r', 11)
        curC.setAttribute('fill', '#C79A3D'); curC.setAttribute('stroke', '#fff'); curC.setAttribute('stroke-width', 1.5)
        curC.classList.add('rm-pulse')
        nodesG.appendChild(curC)

        const hand1 = document.createElementNS(svgNS, 'line')
        hand1.setAttribute('x1', pt.x); hand1.setAttribute('y1', pt.y); hand1.setAttribute('x2', pt.x); hand1.setAttribute('y2', pt.y - 5)
        hand1.setAttribute('stroke', '#fff'); hand1.setAttribute('stroke-width', 1.6); hand1.setAttribute('stroke-linecap', 'round')
        nodesG.appendChild(hand1)

        const hand2 = document.createElementNS(svgNS, 'line')
        hand2.setAttribute('x1', pt.x); hand2.setAttribute('y1', pt.y); hand2.setAttribute('x2', pt.x + 4); hand2.setAttribute('y2', pt.y + 1)
        hand2.setAttribute('stroke', '#fff'); hand2.setAttribute('stroke-width', 1.6); hand2.setAttribute('stroke-linecap', 'round')
        nodesG.appendChild(hand2)

        const curLbl = document.createElementNS(svgNS, 'text')
        curLbl.setAttribute('x', pt.x); curLbl.setAttribute('y', pt.y + (above ? -28 : 36))
        curLbl.setAttribute('text-anchor', 'middle'); curLbl.setAttribute('class', 'rm-node-label strong')
        curLbl.textContent = `Juz ${i + 1}`
        nodesG.appendChild(curLbl)

        const curSub = document.createElementNS(svgNS, 'text')
        curSub.setAttribute('x', pt.x); curSub.setAttribute('y', pt.y + (above ? -14 : 50))
        curSub.setAttribute('text-anchor', 'middle'); curSub.setAttribute('class', 'rm-node-label')
        curSub.setAttribute('fill', '#C79A3D'); curSub.textContent = 'In progress'
        nodesG.appendChild(curSub)

        ;[curLbl, curSub].forEach(t => {
          const bb = t.getBBox()
          const bg = document.createElementNS(svgNS, 'rect')
          bg.setAttribute('x', bb.x - 4); bg.setAttribute('y', bb.y - 2)
          bg.setAttribute('width', bb.width + 8); bg.setAttribute('height', bb.height + 4)
          bg.setAttribute('fill', '#fff')
          nodesG.insertBefore(bg, t)
        })
      } else {
        const upC = document.createElementNS(svgNS, 'circle')
        upC.setAttribute('cx', pt.x); upC.setAttribute('cy', pt.y); upC.setAttribute('r', 5)
        upC.setAttribute('fill', '#EFF3EF'); upC.setAttribute('stroke', '#fff'); upC.setAttribute('stroke-width', 1.5)
        nodesG.appendChild(upC)
      }

      if (i === 0 || i === TOTAL - 1) {
        labelQueue.push({ x: pt.x, y: pt.y + (above ? -22 : 30), i })
      }
    }

    labelQueue.forEach(l => {
      if (Math.abs(l.i - CURRENT) <= 2) return
      const label = document.createElementNS(svgNS, 'text')
      label.setAttribute('x', l.x); label.setAttribute('y', l.y)
      label.setAttribute('text-anchor', l.i === 0 ? 'start' : 'end')
      label.setAttribute('class', 'rm-node-label strong')
      label.textContent = l.i === 0 ? 'Juz 1' : 'Juz 30 · Khatam'
      nodesG.appendChild(label)
      const lbb = label.getBBox()
      const lbg = document.createElementNS(svgNS, 'rect')
      lbg.setAttribute('x', lbb.x - 4); lbg.setAttribute('y', lbb.y - 2)
      lbg.setAttribute('width', lbb.width + 8); lbg.setAttribute('height', lbb.height + 4)
      lbg.setAttribute('fill', '#fff')
      nodesG.insertBefore(lbg, label)
    })

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          progress.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.16,.84,.44,1)'
          progress.style.strokeDashoffset = len * (1 - COMPLETED / (TOTAL - 1))
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })
    io.observe(svgRef.current)

    return () => io.disconnect()
  }, [])

  const pathD = "M20,140 C120,40 180,180 280,110 C380,40 440,180 540,110 C640,40 700,180 800,110 C860,60 900,120 980,90"

  return (
    <section id="roadmap">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>See the Road Map</h2>
          <p>Every student's Quran, laid out as a single path — from Juz 1 to Khatam.</p>
        </div>
        <div className="roadmap-card reveal">
          <div className="roadmap-legend">
            <div className="item"><span className="sw done" />Completed</div>
            <div className="item"><span className="sw current" />In progress</div>
            <div className="item"><span className="sw upcoming" />Upcoming</div>
          </div>
          <div className="roadmap-scroll">
            <svg ref={svgRef} id="roadmapSvg" viewBox="0 0 1000 200" style={{ overflow: 'visible' }}>
              <path ref={baseRef} d={pathD}
                fill="none" stroke="#EFF3EF" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 11" />
              <path ref={progressRef} d={pathD}
                fill="none" stroke="#12A86B" strokeWidth="5" strokeLinecap="round" />
              <g ref={nodesRef} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
