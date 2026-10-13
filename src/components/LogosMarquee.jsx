const institutions = [
  'Jamia Al-Falah',
  'Noor-ul-Quran Academy',
  'Al-Huda Hifz Center',
  'Markaz-e-Tahfeez',
  'Darul Uloom Rahmania',
  'Iqra Quran Academy',
]

// duplicate for seamless loop
const doubled = [...institutions, ...institutions]

export default function LogosMarquee() {
  return (
    <section className="pale-section" style={{ padding: '56px 0' }}>
      <div className="wrap">
        <p className="logos-label">Built for institutions like these</p>
        <div className="marquee-wrap">
          <div className="marquee">
            {doubled.map((name, i) => (
              <span key={i}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
