import { useState, useEffect } from 'react'
import Navbar, { AuthModal } from './components/Navbar'
import PageLoader from './components/PageLoader'
import Hero from './components/Hero'
import LogosMarquee from './components/LogosMarquee'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Roles from './components/Roles'
import Roadmap from './components/Roadmap'
import Screens from './components/Screens'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTABand from './components/CTABand'
import Footer from './components/Footer'

export default function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')

  const openLogin = () => { setAuthMode('login'); setAuthOpen(true) }
  const openSignup = () => { setAuthMode('signup'); setAuthOpen(true) }
  const closeAuth = () => setAuthOpen(false)
  const switchAuth = (mode) => setAuthMode(mode)

  // Scroll-reveal: observe all .reveal elements after every render
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  })

  return (
    <>
      <PageLoader />
      <Navbar onOpenLogin={openLogin} onOpenSignup={openSignup} />
      <AuthModal isOpen={authOpen} mode={authMode} onClose={closeAuth} onSwitch={switchAuth} />

      <main>
        <Hero />
        <LogosMarquee />
        <Features />
        <HowItWorks />
        <Roles />
        <Roadmap />
        <Screens />
        <Testimonials />
        <FAQ />
        <CTABand />
      </main>

      <Footer />
    </>
  )
}
