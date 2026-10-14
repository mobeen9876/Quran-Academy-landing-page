import { useState, useEffect } from 'react'

const LOGIN_URL = 'https://quraani-hayati-backend.wasimdev.com/'

const BrandIcon = () => (
  <svg viewBox="0 0 24 24" fill="#C2913A">
    <path d="M11.1 4.7c-2.4-1.6-5.2-2.2-7.9-1.7-.7.1-1.2.7-1.2 1.5v11.9c0 .9.8 1.6 1.7 1.4 2.4-.4 4.9.2 7 1.6.2.1.4.2.6.2V5.1c-.1-.2-.1-.3-.2-.4Z"/>
    <path d="M12.9 4.7c2.4-1.6 5.2-2.2 7.9-1.7.7.1 1.2.7 1.2 1.5v11.9c0 .9-.8 1.6-1.7 1.4-2.4-.4-4.9.2-7 1.6-.2.1-.4.2-.6.2V5.1c.1-.2.1-.3.2-.4Z"/>
  </svg>
)

export default function Navbar({ onScrollToTop }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <nav>
          <a href="#"
            className="brand"
            onClick={e => { e.preventDefault(); onScrollToTop() }}
          >
            <span className="brand-mark"><BrandIcon /></span>
            <span className="brand-name">Nizam-e-Qurani</span>
          </a>

          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>

          <div className="nav-actions">
            <a href={LOGIN_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              Log in
            </a>
          </div>

          <button className="menu-toggle" aria-label="Open menu" onClick={() => setMobileOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </nav>
      </header>

      <div className={`mobile-panel${mobileOpen ? ' open' : ''}`}>
        <a href="#features" onClick={close}>Features</a>
        <a href="#how"      onClick={close}>How it works</a>
        <a href="#faq"      onClick={close}>FAQ</a>
        <a href={LOGIN_URL} target="_blank" rel="noreferrer"
           className="btn btn-primary btn-lg" style={{ marginTop:8, width:'fit-content' }}
           onClick={close}>
          Log in
        </a>
      </div>
    </>
  )
}

// AuthModal kept exported so App.jsx doesn't break, but no longer used
export function AuthModal() { return null }
