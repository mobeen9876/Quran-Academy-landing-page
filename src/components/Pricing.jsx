const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
)

const plans = [
  {
    label: 'Monthly',
    price: 'PKR 5,000',
    period: '/ month',
    strike: null,
    badge: null,
    featured: false,
    features: [
      'Full feature access',
      'Automatic WhatsApp updates',
      'Cancel any time',
      'Email & WhatsApp support',
    ],
    cta: 'Subscribe',
    ctaClass: 'btn-ghost',
    ctaStyle: { borderColor: 'var(--line-dark)', color: 'var(--on-dark)' },
  },
  {
    label: 'Annual',
    price: 'PKR 48,000',
    period: '/ year',
    strike: 'PKR 60,000',
    badge: 'Save 20%',
    featured: true,
    features: [
      'Everything in Monthly',
      'Save PKR 12,000 every year',
      'Priority support',
      'Free bulk student data import',
    ],
    cta: 'Subscribe',
    ctaClass: 'btn-on-dark',
    ctaStyle: {},
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="dark-section">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your program — switch or cancel any time.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div key={i} className={`plan-card reveal reveal-d${i + 1}${p.featured ? ' featured' : ''}`}>
              {p.badge && <span className="plan-badge">{p.badge}</span>}
              <div className="plan-label">{p.label}</div>
              <div className="plan-price">
                {p.price} <span>{p.period}</span>
                {p.strike && <span className="strike">{p.strike}</span>}
              </div>
              <ul>
                {p.features.map((f, j) => (
                  <li key={j}><CheckIcon />{f}</li>
                ))}
              </ul>
              <a href="#demo" className={`btn ${p.ctaClass}`} style={p.ctaStyle}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          Prices in Pakistani Rupees. Volume-based discounts available for larger programs — contact us for a custom quote.
        </p>
      </div>
    </section>
  )
}
