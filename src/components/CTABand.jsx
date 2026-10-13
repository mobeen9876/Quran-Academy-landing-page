function JuzStrip({ filledCount = 30, delayStep = 0.022 }) {
  return (
    <div className="juz-strip">
      {Array.from({ length: 30 }, (_, i) => (
        <span
          key={i}
          className={i < filledCount ? 'on' : ''}
          style={{ animationDelay: `${(i + 1) * delayStep}s` }}
        />
      ))}
    </div>
  )
}

export default function CTABand() {
  return (
    <section className="cta-band" id="demo">
      <div className="wrap cta-band-inner">
        <h2 className="reveal">
          Give your madrasa a system<br />parents can feel.
        </h2>
        <p className="reveal reveal-d1">
          Subscribe today and get your students up and running in fifteen minutes.
        </p>
        <a href="#" className="btn btn-on-dark btn-lg reveal reveal-d2">Subscribe now</a>
        <div className="cta-strip reveal reveal-d3">
          <JuzStrip filledCount={30} />
        </div>
      </div>
    </section>
  )
}
