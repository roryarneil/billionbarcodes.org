const cards = [
  {
    title: 'Already have an LCA?',
    body: 'Publish your product carbon footprint to the CO2 attribute in GS1. It appears in the app as soon as it syncs, and you come off the Naughty List.',
    cta: 'Publish your PCF',
  },
  {
    title: 'Not measured yet?',
    body: 'Commission a life cycle assessment through one of our audit partners and display a certified leaf rating on your product.',
    cta: 'Talk to an audit partner',
  },
  {
    title: 'Green alternative brand?',
    body: 'Get recommended when shoppers scan a product that won’t disclose, and get listed on the Climate Savers marketplace.',
    cta: 'Become a green alternative',
  },
]

export function Producers() {
  return (
    <section id="producers" className="band-mint">
      <div className="wrap stack">
        <div className="section-intro">
          <p className="eyebrow">For producers</p>
          <h2 className="display">
            Your customers are asking. Make transparency your edge.
          </h2>
          <p className="lede">
            We show you how many shoppers have scanned your product and want its
            footprint. Use that demand to build the business case.
          </p>
        </div>
        <div className="producer-grid">
          {cards.map((card) => (
            <article className="producer-card" key={card.title}>
              <h3>{card.title}</h3>
              <p className="muted">{card.body}</p>
              <a className="btn btn-forest" href="#join">
                {card.cta}
              </a>
            </article>
          ))}
        </div>
        <div className="gs1-row">
          <div className="gs1-built">
            <span>Built on the</span>
            <span className="gs1-chip">GS1 CO2 attribute</span>
          </div>
          <div className="badge-row">
            <div className="gs1-badge">
              <img
                src="/gs1-solution-partner.png"
                alt="GS1 Nederland Solution Partner"
              />
              <span className="status-pending">
                <i />
                Status: Pending
              </span>
            </div>
            <div className="gs1-badge">
              <img
                src="/gs1-sustainability-pioneer.png"
                alt="GS1 Nederland Sustainability Data Pioneer"
              />
              <span className="status-pending">
                <i />
                Status: Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
