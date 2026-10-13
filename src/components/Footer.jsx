import { useState } from 'react'

const BrandIcon = () => (
  <svg viewBox="0 0 24 24" fill="#C79A3D" style={{ width: 17, height: 17 }}>
    <path d="M11.1 4.7c-2.4-1.6-5.2-2.2-7.9-1.7-.7.1-1.2.7-1.2 1.5v11.9c0 .9.8 1.6 1.7 1.4 2.4-.4 4.9.2 7 1.6.2.1.4.2.6.2V5.1c-.1-.2-.1-.3-.2-.4Z"/>
    <path d="M12.9 4.7c2.4-1.6 5.2-2.2 7.9-1.7.7.1 1.2.7 1.2 1.5v11.9c0 .9-.8 1.6-1.7 1.4-2.4-.4-4.9.2-7 1.6-.2.1-.4.2-.6.2V5.1c.1-.2.1-.3.2-.4Z"/>
  </svg>
)

export default function Footer() {
  const [activeLang, setActiveLang] = useState('EN')

  return (
    <footer>
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BrandIcon />
            </span>
            <span className="brand-name" style={{ fontFamily: "'Fraunces',serif", fontWeight: 600, fontSize: 20 }}>Nizam-e-Qurani</span>
          </div>
          <p>Hifz and Nazra progress tracking for madaris and Quran academies, with automatic WhatsApp updates for parents.</p>
        </div>

        <div className="foot-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="foot-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#demo">Subscribe</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
      </div>

      <div className="wrap foot-bottom">
        <p>© 2026 Nizam-e-Qurani. All rights reserved.</p>
        <div className="lang-switch">
          {['EN', 'AR', 'UR'].map(lang => (
            <span
              key={lang}
              className={activeLang === lang ? 'active' : ''}
              onClick={() => setActiveLang(lang)}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
