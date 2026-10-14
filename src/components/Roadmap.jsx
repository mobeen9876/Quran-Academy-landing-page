import { useEffect, useRef } from 'react'

const TOTAL     = 30
const COMPLETED = 15
const CURRENT   = 16 // 1-based juz number currently in progress

const juzNames = [
  'Al-Baqarah','Al-Baqarah','Al-Imran','Al-Imran','Al-Nisa',
  'Al-Nisa','Al-Maida','Al-Anam','Al-Araf','Al-Anfal',
  'At-Tawbah','Hud','Yusuf','Ibrahim','Al-Kahf',
  'Al-Kahf','Al-Anbiya','Al-Muminun','Al-Furqan','An-Naml',
  'Al-Ankabut','Al-Ahzab','Ya-Sin','Az-Zumar','Fussilat',
  'Al-Ahqaf','Az-Zariyat','Al-Mujadila','Al-Mulk','An-Naba',
]

export default function Roadmap() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const cells = gridRef.current.querySelectorAll('.juz-cell')
          cells.forEach((cell, i) => {
            setTimeout(() => cell.classList.add('visible'), i * 40)
          })
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.2 })
    io.observe(gridRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id="roadmap" className="pale-section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="overline">Student progress</span>
          <h2>See the Road Map.</h2>
          <p>Every student's Quran, laid out as 30 juz — each one tracked to completion.</p>
        </div>

        <div className="roadmap-card reveal">
          {/* legend */}
          <div className="roadmap-legend">
            <div className="item"><span className="sw done" />Completed</div>
            <div className="item"><span className="sw current" />In progress</div>
            <div className="item"><span className="sw upcoming" />Upcoming</div>
          </div>

          {/* student info bar */}
          <div className="rm-student-bar">
            <div className="rm-avatar">A</div>
            <div>
              <strong>Ali — Hifz Program</strong>
              <span>{COMPLETED} of {TOTAL} juz completed &nbsp;·&nbsp; {Math.round((COMPLETED/TOTAL)*100)}% done</span>
            </div>
            <div className="rm-progress-pill">
              <div className="rm-progress-fill" style={{ width: `${(COMPLETED/TOTAL)*100}%` }} />
            </div>
          </div>

          {/* juz grid */}
          <div className="juz-grid" ref={gridRef}>
            {Array.from({ length: TOTAL }, (_, i) => {
              const juzNum = i + 1
              const state  = juzNum < CURRENT ? 'done'
                           : juzNum === CURRENT ? 'current'
                           : 'upcoming'
              return (
                <div key={i} className={`juz-cell juz-${state}`} title={`Juz ${juzNum} — ${juzNames[i]}`}>
                  <span className="juz-num">{juzNum}</span>
                  {state === 'done' && (
                    <svg className="juz-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  )}
                  {state === 'current' && <span className="juz-pulse" />}
                </div>
              )
            })}
          </div>

          <p className="rm-footer-note">
            Hover any juz to see the surah. Completed juz are locked — the next one unlocks automatically.
          </p>
        </div>
      </div>
    </section>
  )
}
