import { useEffect, useRef } from 'react'

function animateCount(el, target, suffix) {
  let startTime = null
  const dur = 1400
  function step(ts) {
    if (!startTime) startTime = ts
    const progress = Math.min((ts - startTime) / dur, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.round(eased * target) + (suffix || '')
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const statTargets = [
  { id: 'statMadaris', val: 12, suffix: '+' },
  { id: 'statStudents', val: 850, suffix: '+' },
  { id: 'statUpdates', val: 9, suffix: 'k+' },
]

export default function Hero() {
  const statRowRef = useRef(null)

  useEffect(() => {
    if (!statRowRef.current) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          statTargets.forEach((s) => {
            const el = document.getElementById(s.id)
            if (el) animateCount(el, s.val, s.suffix)
          })
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.4 })
    io.observe(statRowRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        {/* --- copy side --- */}
        <div>
          <div className="eyebrow-badge reveal">
            <span className="dot" />
            Now live for madaris in Pakistan &amp; the Gulf
          </div>
          <h1 className="reveal reveal-d1">Track every juz.<br />Update every parent.</h1>
          <p className="lede reveal reveal-d2">
            Nizam-e-Qurani gives your madrasa a daily record of every student's Hifz and Nazra
            progress — and sends parents the update on WhatsApp automatically.
          </p>
          <div className="hero-ctas reveal reveal-d3">
            <a href="#demo" className="btn btn-primary btn-lg">Subscribe now</a>
            <a href="#how" className="btn btn-ghost btn-lg">See how it works</a>
          </div>
          <p className="hero-note reveal reveal-d3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
            No credit card required · Free for 7 days
          </p>
          <div className="stat-row reveal reveal-d4" ref={statRowRef}>
            <div className="stat"><b id="statMadaris">0</b><span>Madaris onboard</span></div>
            <div className="stat"><b id="statStudents">0</b><span>Students tracked</span></div>
            <div className="stat"><b id="statUpdates">0</b><span>WhatsApp updates / month</span></div>
          </div>
        </div>

        {/* --- visual side --- */}
        <div className="hero-visual reveal reveal-d3">
          <div className="phone">
            <div className="phone-inner">
              <div className="phone-head">
                <div className="phone-avatar">NQ</div>
                <div>
                  <div className="who">Nizam-e-Qurani</div>
                  <div className="status">Umm-e-Ali · Parent</div>
                </div>
              </div>
              <div className="phone-body">
                <div className="bubble">
                  Assalam-o-Alaikum! <strong>Ali</strong> completed today's sabaq — Surah Al-Baqarah,
                  ayah 40–45. Revision: Juz 3. Result: <strong>Excellent.</strong>
                  <span className="t">5:42 PM · Sent by Ustaz Kareem</span>
                </div>
                <div className="bubble">
                  Tomorrow's portion has been added to Ali's Road Map.
                  <span className="t">5:42 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="float-badge">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20"/>
              </svg>
            </div>
            <div>
              <b>Juz 3 of 30</b>
              <span>Ali's progress today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
