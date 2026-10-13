import { useRef } from 'react'

const DEST_EMAIL = 'hello@nizamequrani.com'
const DEST_WHATSAPP = '92XXXXXXXXXX' // TODO: replace with real number

export default function Contact() {
  const nameRef = useRef(null)
  const contactRef = useRef(null)
  const messageRef = useRef(null)
  const formRef = useRef(null)

  const buildMessage = () => {
    const name = nameRef.current.value
    const contact = contactRef.current.value
    const message = messageRef.current.value
    return `Name: ${name}\nContact: ${contact}\n\n${message}`
  }

  const handleEmail = (e) => {
    e.preventDefault()
    const body = buildMessage()
    const name = nameRef.current.value
    window.location.href = `mailto:${DEST_EMAIL}?subject=${encodeURIComponent('Website enquiry from ' + name)}&body=${encodeURIComponent(body)}`
  }

  const handleWhatsApp = () => {
    if (!formRef.current.reportValidity()) return
    const body = buildMessage()
    window.open(`https://wa.me/${DEST_WHATSAPP}?text=${encodeURIComponent(body)}`, '_blank')
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Contact us</h2>
          <p>Send a message and we'll get back to you by email or WhatsApp.</p>
        </div>
        <form className="contact-form reveal" ref={formRef} onSubmit={handleEmail}>
          <div className="contact-row">
            <label>Name<input type="text" name="name" ref={nameRef} required /></label>
            <label>Email or phone<input type="text" name="contact" ref={contactRef} required /></label>
          </div>
          <label>Message<textarea name="message" ref={messageRef} rows="5" required /></label>
          <div className="contact-actions">
            <button type="submit" className="btn btn-primary btn-lg">Send email</button>
            <button type="button" className="btn btn-ghost btn-lg" onClick={handleWhatsApp}>Send on WhatsApp</button>
          </div>
          <p className="auth-note">
            Sending opens your email app or WhatsApp with the message pre-filled — nothing is sent from this page directly.
          </p>
        </form>
      </div>
    </section>
  )
}
