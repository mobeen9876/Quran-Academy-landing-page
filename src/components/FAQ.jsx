const faqs = [
  {
    q: 'Do we need technical staff to set this up?',
    a: 'No. Any teacher can learn the day-to-day use in about five minutes. We handle the initial setup with you, including importing your existing student list.',
    open: true,
  },
  {
    q: 'How long does setup take?',
    a: 'Most madaris are fully set up within a day — students added, plans assigned, and the first WhatsApp update sent.',
  },
  {
    q: 'Do parents need to verify their WhatsApp number?',
    a: 'Yes, a one-time verification confirms the right number is on file, so updates never go to the wrong parent.',
  },
  {
    q: 'Is Nizam-e-Qurani available in Arabic?',
    a: 'Yes — the full system, including WhatsApp messages, works in both Arabic and English.',
  },
  {
    q: 'What happens to schedules on a holiday?',
    a: "Add the holiday once in the admin dashboard, and every student's schedule shifts around it automatically — no manual rework.",
  },
]

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14"/>
  </svg>
)

export default function FAQ() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head reveal"><h2>Questions, answered</h2></div>
        <div className="faq">
          {faqs.map((f, i) => (
            <details key={i} open={f.open || undefined}>
              <summary>
                {f.q}
                <span className="plus"><PlusIcon /></span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
