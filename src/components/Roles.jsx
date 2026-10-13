const roles = [
  {
    kicker: 'Administrator',
    title: 'Run the whole program',
    desc: "Every student, teacher and parent in one dashboard — filtered by section if you run separate boys' and girls' wings.",
  },
  {
    kicker: 'Teacher',
    title: 'Track without the paperwork',
    desc: "Your classes, your students' Road Maps, and today's tasks — nothing else to search through.",
  },
  {
    kicker: 'Parent',
    title: 'Stay informed, automatically',
    desc: "See your child's progress the moment it's recorded, on WhatsApp. No app to download.",
  },
]

export default function Roles() {
  return (
    <section className="pale-section">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Built for three people, not one.</h2>
          <p>Every role gets exactly what it needs and nothing it doesn't.</p>
        </div>
        <div className="role-grid">
          {roles.map((r, i) => (
            <div key={i} className={`role-card reveal reveal-d${i + 1}`}>
              <span className="role-kicker">{r.kicker}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
