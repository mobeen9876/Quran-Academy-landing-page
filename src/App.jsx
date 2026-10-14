import { useState, useEffect, useCallback } from 'react'
import Navbar, { AuthModal } from './components/Navbar'
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
  const [authOpen, setAuthOpen]   = useState(false)
  const [authMode, setAuthMode]   = useState('login')
  const [heroKey,  setHeroKey]    = useState(0)  // bump to replay Hero animations

  const openLogin  = () => { setAuthMode('login');  setAuthOpen(true) }
  const openSignup = () => { setAuthMode('signup'); setAuthOpen(true) }
  const closeAuth  = () => setAuthOpen(false)
  const switchAuth = (mode) => setAuthMode(mode)

  // Called by both Navbar and Footer brand logo clicks
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // After smooth scroll finishes (~600ms), remount Hero to replay animations
    setTimeout(() => setHeroKey(k => k + 1), 650)
  }, [])

  // Scroll-reveal for all sections
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
      <Navbar onScrollToTop={scrollToTop} />
      <AuthModal isOpen={authOpen} mode={authMode} onClose={closeAuth} onSwitch={switchAuth} />

      <main>
        <Hero key={heroKey} />
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

      <Footer onScrollToTop={scrollToTop} />
    </>
  )
}
