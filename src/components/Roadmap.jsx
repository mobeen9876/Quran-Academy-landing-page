import { useEffect, useRef } from 'react'

const TOTAL = 30, COMPLETED = 15, CURRENT = 15

export default function Roadmap() {
  const svgRef      = useRef(null)
  const baseRef     = useRef(null)
  const progressRef = useRef(null)
  const nodesRef    = useRef(null)

  useEffect(() => {
    const base = baseRef.current, progress = progressRef.current, nodesG = nodesRef.current
    if (!base || !progress || !nodesG) return

    const svgNS = 'http://www.w3.org/2000/svg'
    const len   = base.getTotalLength()
    progress.style.strokeDasharray  = len
    progress.style.strokeDashoffset = len

    while (nodesG.firstChild) nodesG.removeChild(nodesG.firstChild)

    const labelQueue = []

    for (let i = 0; i < TOTAL; i++) {
      const frac  = i / (TOTAL - 1)
      const pt    = base.getPointAtLength(frac * len)
      const above = Math.floor(i / 2) % 2 === 0

      if (i < COMPLETED) {
        const c = document.createElementNS(svgNS, 'circle')
        c.setAttribute('cx', pt.x); c.setAttribute('cy', pt.y); c.setAttribute('r', 7)
        c.setAttribute('fill', '#11A367'); c.setAttribute('stroke', '#fff'); c.setAttribute('stroke-width', 1.5)
        nodesG.appendChild(c)
        const chk = document.createElementNS(svgNS, 'path')
        chk.setAttribute('d', `M${pt.x-3},${pt.y} l2,2.2 l4.2,-4.4`)
        chk.setAttribute('stroke','#fff'); chk.setAttribute('stroke-width',1.6)
        chk.setAttribute('fill','none'); chk.setAttribute('stroke-linecap','round'); chk.setAttribute('stroke-linejoin','round')
        nodesG.appendChild(chk)

      } else if (i === CURRENT) {
        const c = document.createElementNS(svgNS, 'circle')
        c.setAttribute('cx', pt.x); c.setAttribute('cy', pt.y); c.setAttribute('r', 11)
        c.setAttribute('fill', '#C2913A'); c.setAttribute('stroke', '#fff'); c.setAttribute('stroke-width', 2)
        c.classList.add('rm-pulse')
        nodesG.appendChild(c)
        const h1 = document.createElementNS(svgNS, 'line')
        h1.setAttribute('x1',pt.x); h1.setAttribute('y1',pt.y); h1.setAttribute('x2',pt.x); h1.setAttribute('y2',pt.y-5)
        h1.setAttribute('stroke','#fff'); h1.setAttribute('stroke-width',1.6); h1.setAttribute('stroke-linecap','round')
        nodesG.appendChild(h1)
        const h2 = document.createElementNS(svgNS, 'line')
        h2.setAttribute('x1',pt.x); h2.setAttribute('y1',pt.y); h2.setAttribute('x2',pt.x+4); h2.setAttribute('y2',pt.y+1)
        h2.setAttribute('stroke','#fff'); h2.setAttribute('stroke-width',1.6); h2.setAttribute('stroke-linecap','round')
        nodesG.appendChild(h2)

        const lbl = document.createElementNS(svgNS, 'text')
        lbl.setAttribute('x', pt.x); lbl.setAttribute('y', pt.y + (above ? -28 : 36))
        lbl.setAttribute('text-anchor','middle'); lbl.setAttribute('class','rm-node-label strong')
        lbl.textContent = `Juz ${i + 1}`
        nodesG.appendChild(lbl)
        const sub = document.createElementNS(svgNS, 'text')
        sub.setAttribute('x', pt.x); sub.setAttribute('y', pt.y + (above ? -14 : 50))
        sub.setAttribute('text-anchor','middle'); sub.setAttribute('class','rm-node-label')
        sub.setAttribute('fill','#C2913A'); sub.textContent = 'In progress'
        nodesG.appendChild(sub)

        ;[lbl, sub].forEach(t => {
          const bb = t.getBBox()
          const bg = document.createElementNS(svgNS, 'rect')
          bg.setAttribute('x', bb.x-5); bg.setAttribute('y', bb.y-3)
          bg.setAttribute('width', bb.width+10); bg.setAttribute('height', bb.height+6)
          bg.setAttribute('fill', '#fff'); bg.setAttribute('rx', 3)
          nodesG.insertBefore(bg, t)
        })

      } else {
        const c = document.createElementNS(svgNS, 'circle')
        c.setAttribute('cx', pt.x); c.setAttribute('cy', pt.y); c.setAttribute('r', 5)
        c.setAttribute('fill', '#EDF1EC'); c.setAttribute('stroke', '#fff'); c.setAttribute('stroke-width', 1.5)
        nodesG.appendChild(c)
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
      label.textContent = l.i === 0 ? 'Juz 1' : 'Juz 30 · Completion'
      nodesG.appendChild(label)
      const lbb = label.getBBox()
      const lbg = document.createElementNS(svgNS, 'rect')
      lbg.setAttribute('x', lbb.x-5); lbg.setAttribute('y', lbb.y-3)
      lbg.setAttribute('width', lbb.width+10); lbg.setAttribute('height', lbb.height+6)
      lbg.setAttribute('fill', '#fff'); lbg.setAttribute('rx', 3)
      nodesG.insertBefore(lbg, label)
    })

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          progress.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(.16,.84,.44,1)'
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
    <section id="roadmap" className="pale-section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="overline">Student progress</span>
          <h2>See the Road Map.</h2>
          <p>Every student's Quran, laid out as a single path — from Juz 1 to Khatam.</p>
        </div>
        <div className="roadmap-card reveal">
          <div className="roadmap-legend">
            <div className="item"><span className="sw done" />Completed</div>
            <div className="item"><span className="sw current" />In progress</div>
            <div className="item"><span className="sw upcoming" />Upcoming</div>
          </div>
          <div className="roadmap-scroll">
            <svg ref={svgRef} viewBox="0 0 1000 200" style={{ overflow:'visible' }}>
              <path ref={baseRef} d={pathD}
                fill="none" stroke="#EDF1EC" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 11" />
              <path ref={progressRef} d={pathD}
                fill="none" stroke="#11A367" strokeWidth="5" strokeLinecap="round" />
              <g ref={nodesRef} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
