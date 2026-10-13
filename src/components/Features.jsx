const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
    title: 'Daily roadmap',
    desc: 'Every student gets a day-by-day memorization and revision schedule, generated the moment a plan is assigned.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    title: 'Automatic WhatsApp updates',
    desc: "The moment a teacher records today's result, parents get the update — no extra step, no phone call.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v4M16 2v4M9 16l2 2 4-4"/>
      </svg>
    ),
    title: 'Holiday-aware scheduling',
    desc: "Add a holiday once. Every affected student's schedule shifts around it automatically.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/>
        <circle cx="19" cy="8" r="2.5"/><path d="M22 21v-1.6a3 3 0 0 0-2-2.83"/>
      </svg>
    ),
    title: 'Role-based dashboards',
    desc: 'Administrators see the whole program. Teachers see their classes. Parents see their child.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <path d="M17 8l-5-5-5 5M12 3v12"/>
      </svg>
    ),
    title: 'Bulk import & export',
    desc: 'Bring an existing student list in from a spreadsheet in minutes, and export it back out any time.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Arabic & English',
    desc: "The full system works in both languages, so every user can work in what's comfortable.",
  },
]

const delays = ['reveal-d1','reveal-d2','reveal-d3','reveal-d4','reveal-d5','reveal-d6']

export default function Features() {
  return (
    <section id="features" className="dark-section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="overline">Platform features</span>
          <h2>One roadmap, from Qaida to Khatam.</h2>
          <p>Everything your madrasa needs to run Hifz and Nazra classes, in one place.</p>
        </div>
        <div className="feat-grid">
          {features.map((f, i) => (
            <div key={i} className={`feat-card reveal ${delays[i]}`}>
              <span className="feat-num">0{i + 1}</span>
              <div className="feat-ic">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
