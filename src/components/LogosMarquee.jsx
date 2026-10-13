const institutions = [
  'Jamia Al-Falah',
  'Noor-ul-Quran Academy',
  'Al-Huda Hifz Center',
  'Markaz-e-Tahfeez',
  'Darul Uloom Rahmania',
  'Iqra Quran Academy',
]

const doubled = [...institutions, ...institutions]

export default function LogosMarquee() {
  return (
    <div className="logos-section">
      <div className="wrap">
        <p className="logos-label">Trusted by madaris &amp; academies</p>
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {doubled.map((name, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
