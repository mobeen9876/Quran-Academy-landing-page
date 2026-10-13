import { useState, useEffect } from 'react'

const BrandIcon = () => (
  <svg viewBox="0 0 24 24" fill="#C2913A">
    <path d="M11.1 4.7c-2.4-1.6-5.2-2.2-7.9-1.7-.7.1-1.2.7-1.2 1.5v11.9c0 .9.8 1.6 1.7 1.4 2.4-.4 4.9.2 7 1.6.2.1.4.2.6.2V5.1c-.1-.2-.1-.3-.2-.4Z"/>
    <path d="M12.9 4.7c2.4-1.6 5.2-2.2 7.9-1.7.7.1 1.2.7 1.2 1.5v11.9c0 .9-.8 1.6-1.7 1.4-2.4-.4-4.9.2-7 1.6-.2.1-.4.2-.6.2V5.1c.1-.2.1-.3.2-.4Z"/>
  </svg>
)

export default function Navbar({ onOpenLogin, onOpenSignup }) {
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
          <a href="#" className="brand">
            <span className="brand-mark"><BrandIcon /></span>
            <span className="brand-name">Nizam-e-Qurani</span>
          </a>

          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>

          <div className="nav-actions">
            <button className="btn btn-ghost btn-sm" onClick={onOpenLogin}>Log in</button>
            <button className="btn btn-ghost btn-sm" onClick={onOpenSignup}>Sign up</button>
            <a href="#demo" className="btn btn-primary btn-sm">Subscribe</a>
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
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:8 }}>
          <button className="btn btn-ghost btn-lg" onClick={() => { close(); onOpenLogin(); }}>Log in</button>
          <button className="btn btn-ghost btn-lg" onClick={() => { close(); onOpenSignup(); }}>Sign up</button>
          <a href="#demo" className="btn btn-primary btn-lg" onClick={close}>Subscribe</a>
        </div>
      </div>
    </>
  )
}

export function AuthModal({ isOpen, mode, onClose, onSwitch }) {
  const [note, setNote] = useState("This form is a front-end preview — it isn't connected to a live account system yet.")

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setNote(`Front-end preview only — connect to your backend to make ${mode} work.`)
  }

  return (
    <div className="auth-overlay open" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="auth-modal">
        <button className="auth-close" onClick={onClose} aria-label="Close">&times;</button>

        {mode === 'login' && (
          <form className="auth-form" onSubmit={handleSubmit}>
            <h3>Welcome back</h3>
            <p className="auth-sub">Administrators, teachers and parents all sign in here.</p>
            <label>Email or phone<input type="text" name="identifier" required /></label>
            <label>Password<input type="password" name="password" required /></label>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width:'100%', marginTop:6 }}>Log in</button>
            <p className="auth-switch">New here? <a href="#" onClick={e => { e.preventDefault(); onSwitch('signup') }}>Create an account</a></p>
          </form>
        )}

        {mode === 'signup' && (
          <form className="auth-form" onSubmit={handleSubmit}>
            <h3>Create your account</h3>
            <p className="auth-sub">Set up your madrasa's account to get started.</p>
            <label>Full name<input type="text" name="name" required /></label>
            <label>Madrasa / academy name<input type="text" name="org" required /></label>
            <label>Email<input type="email" name="email" required /></label>
            <label>WhatsApp number<input type="tel" name="phone" required /></label>
            <label>Password<input type="password" name="password" required /></label>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width:'100%', marginTop:6 }}>Sign up</button>
            <p className="auth-switch">Have an account? <a href="#" onClick={e => { e.preventDefault(); onSwitch('login') }}>Log in</a></p>
          </form>
        )}

        <p className="auth-note">{note}</p>
      </div>
    </div>
  )
}
