import { useState } from 'react'

const BrandIcon = () => (
  <svg viewBox="0 0 24 24" fill="#C2913A" style={{ width:18, height:18 }}>
    <path d="M11.1 4.7c-2.4-1.6-5.2-2.2-7.9-1.7-.7.1-1.2.7-1.2 1.5v11.9c0 .9.8 1.6 1.7 1.4 2.4-.4 4.9.2 7 1.6.2.1.4.2.6.2V5.1c-.1-.2-.1-.3-.2-.4Z"/>
    <path d="M12.9 4.7c2.4-1.6 5.2-2.2 7.9-1.7.7.1 1.2.7 1.2 1.5v11.9c0 .9-.8 1.6-1.7 1.4-2.4-.4-4.9.2-7 1.6-.2.1-.4.2-.6.2V5.1c.1-.2.1-.3.2-.4Z"/>
  </svg>
)

export default function Footer() {
  const [email, setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <footer>
      <div className="wrap foot-grid">

        {/* brand */}
        <div className="foot-brand">
          <a href="#" onClick={e => {
              e.preventDefault()
              document.documentElement.classList.add('scroll-to-top')
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setTimeout(() => document.documentElement.classList.remove('scroll-to-top'), 600)
            }} style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
            <span style={{ width:32, height:32, borderRadius:9, background:'var(--dark-2)', border:'1px solid var(--line-dark)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <BrandIcon />
            </span>
            <span style={{ fontFamily:"'Fraunces',serif", fontWeight:600, fontSize:18, color:'var(--on-dark)' }}>
              Nizam-e-Qurani
            </span>
          </a>
          <p>Hifz and Nazra progress tracking for madaris and Quran academies, with automatic WhatsApp updates for parents.</p>
        </div>

        {/* product links */}
        <div className="foot-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* newsletter */}
        <div className="foot-col">
          <h4>Stay updated</h4>
          <p style={{ fontSize:13.5, color:'var(--on-dark-soft)', marginBottom:14, lineHeight:1.6 }}>
            Get product updates and tips for madaris — no spam, ever.
          </p>
          {submitted ? (
            <div className="foot-newsletter-success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              You're on the list!
            </div>
          ) : (
            <form className="foot-newsletter" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit" aria-label="Subscribe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          )}
        </div>

      </div>

      <div className="wrap foot-bottom">
        <p>© 2026 Nizam-e-Qurani. All rights reserved.</p>
      </div>
    </footer>
  )
}
