const AdminIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
)
const TeacherIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h20v14H2z"/><path d="M8 21h8M12 17v4"/>
  </svg>
)
const ParentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)

const roles = [
  {
    icon: <AdminIcon />,
    kicker: 'Administrator',
    title: 'Run the whole program',
    desc: "Every student, teacher and parent in one dashboard — filtered by section if you run separate boys' and girls' wings.",
  },
  {
    icon: <TeacherIcon />,
    kicker: 'Teacher',
    title: 'Track without the paperwork',
    desc: "Your classes, your students' Road Maps, and today's tasks — nothing else to search through.",
  },
  {
    icon: <ParentIcon />,
    kicker: 'Parent',
    title: 'Stay informed, automatically',
    desc: "See your child's progress the moment it's recorded, on WhatsApp. No app to download.",
  },
]

export default function Roles() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="overline">Who it's for</span>
          <h2>Built for three people, not one.</h2>
          <p>Every role gets exactly what it needs and nothing it doesn't.</p>
        </div>
        <div className="role-grid">
          {roles.map((r, i) => (
            <div key={i} className={`role-card reveal reveal-d${i + 1}`}>
              <div className="role-icon">{r.icon}</div>
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
