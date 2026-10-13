const screens = [
  { tag: 'For teachers',      src: '/teacher-dashboard.PNG',  alt: 'Teacher dashboard' },
  { tag: 'For parents',       src: '/parent-dashboard.PNG',   alt: 'Parent dashboard' },
  { tag: 'For administrators',src: '/admin-student.PNG',      alt: 'Admin students list' },
  { tag: 'Lesson plans',      src: '/student-progress.PNG',   alt: 'Student progress road map' },
]

const delays = ['reveal-d1','reveal-d2','reveal-d3','reveal-d4']

export default function Screens() {
  return (
    <section className="dark-section" id="screens">
      <div className="wrap">
        <div className="screens-intro section-head reveal">
          <h2>Built to be seen, not just used</h2>
          <p>The same daily record, shown the way each person actually needs it.</p>
        </div>
        <div className="screens-showcase">
          {screens.map((s, i) => (
            <div key={i} className={`screen-card reveal ${delays[i]}`}>
              <span className="screen-tag">{s.tag}</span>
              <div className="screen-mock">
                <div className="browser-bar"><span /><span /><span /></div>
                <img src={s.src} alt={s.alt} style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
