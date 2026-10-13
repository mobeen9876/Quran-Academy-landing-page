const steps = [
  {
    num: '1',
    title: 'Assign a plan',
    desc: 'Pick a memorization plan and a start date. The system builds the full schedule, skipping holidays automatically.',
  },
  {
    num: '2',
    title: "Record the day's result",
    desc: 'After each session, the teacher marks what was recited, what was revised, and how it went.',
  },
  {
    num: '3',
    title: 'Parent gets notified',
    desc: "A WhatsApp message goes out immediately — no dashboard login required on the parent's side.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>How it works</h2>
          <p>Three steps, repeated every day your madrasa is open.</p>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className={`step-card reveal reveal-d${i + 1}`}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
