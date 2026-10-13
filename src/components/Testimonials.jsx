const testimonials = [
  {
    quote: "I used to call three or four parents every evening just to update them. Now I mark the result after class and it's done — I get my evenings back.",
    initials: 'AK',
    name: 'Ustaz Adeel Kareem',
    org: 'Hifz teacher, Jamia Al-Falah, Lahore',
  },
  {
    quote: "My son is at a Hifz academy here in Muscat. Getting his daily sabaq on WhatsApp, in Arabic, means I don't have to wait for the weekly call to know how he's doing.",
    initials: 'MB',
    name: 'Umm Bilal',
    org: 'Parent, Muscat, Oman',
  },
  {
    quote: "Honestly the holiday handling sold me. We used to redo half the schedule by hand after Eid break — now it just shifts on its own.",
    initials: 'HR',
    name: 'Hafiz Rizwan Ahmed',
    org: 'Administrator, Noor-ul-Quran Academy',
  },
  {
    quote: "Took our admin about a day to get the student list imported and plans assigned. There were a couple of questions along the way, but nothing that slowed us down.",
    initials: 'SN',
    name: 'Sister Nadia Farooq',
    org: 'Coordinator, Al-Huda Hifz Center',
  },
]

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

export default function Testimonials() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal">
          <h2>What madaris are saying</h2>
          <p>Real notes from teachers, parents and administrators using the system day to day.</p>
        </div>
        <div className="test-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)', maxWidth: 900, margin: '0 auto' }}>
          {testimonials.map((t, i) => (
            <div key={i} className={`test-card reveal reveal-d${i + 1}`}>
              <div className="test-stars">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className="quote">"{t.quote}"</p>
              <div className="test-attr">
                <div className="test-avatar">{t.initials}</div>
                <div><b>{t.name}</b><span>{t.org}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
