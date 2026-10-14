import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // start fade-out after 1.4s, then unmount after transition completes
    const fadeTimer  = setTimeout(() => setFadeOut(true),  1400)
    const unmount    = setTimeout(() => setVisible(false), 1900)
    return () => { clearTimeout(fadeTimer); clearTimeout(unmount) }
  }, [])

  if (!visible) return null

  return (
    <div className={`page-loader${fadeOut ? ' fade-out' : ''}`}>
      <div className="page-loader-inner">
        {/* brand mark */}
        <div className="pl-mark">
          <svg viewBox="0 0 24 24" fill="#C2913A">
            <path d="M11.1 4.7c-2.4-1.6-5.2-2.2-7.9-1.7-.7.1-1.2.7-1.2 1.5v11.9c0 .9.8 1.6 1.7 1.4 2.4-.4 4.9.2 7 1.6.2.1.4.2.6.2V5.1c-.1-.2-.1-.3-.2-.4Z"/>
            <path d="M12.9 4.7c2.4-1.6 5.2-2.2 7.9-1.7.7.1 1.2.7 1.2 1.5v11.9c0 .9-.8 1.6-1.7 1.4-2.4-.4-4.9.2-7 1.6-.2.1-.4.2-.6.2V5.1c.1-.2.1-.3.2-.4Z"/>
          </svg>
        </div>
        <span className="pl-name">Nizam-e-Qurani</span>
        {/* loading bar */}
        <div className="pl-bar-track">
          <div className="pl-bar-fill" />
        </div>
      </div>
    </div>
  )
}
