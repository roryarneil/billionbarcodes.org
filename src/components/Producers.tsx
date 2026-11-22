import { links } from '../links'

const cards = [
  {
    title: 'Already have an LCA?',
    body: 'Publish your product carbon footprint to the CO2 attribute in GS1. It appears in the app as soon as it syncs, and you come off the Naughty List.',
    cta: 'Publish your PCF',
  },
  {
    title: 'Not measured yet?',
    body: 'Commission a life cycle assessment through one of our audit partners, then publish the verified footprint for your product.',
    cta: 'Talk to an audit partner',
  },
  {
    title: 'Already disclosed?',
    body: 'Get recommended as a disclosed alternative when shoppers scan a product that doesn’t disclose, and get listed on the Climate Savers marketplace.',
    cta: 'List your product',
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
          <div className="gs1-about">
            <p className="gs1-lead">
              Built on <a href={links.gs1Standards}>GS1</a>, the global standard for
              retail and e-commerce. A non-profit that standardises the distribution
              of barcodes globally.
            </p>
            <p className="muted">
              GS1 Standards create a common foundation for business by uniquely
              identifying, accurately capturing and automatically sharing vital
              information about products, locations, assets and more.
            </p>
            <a className="text-link text-link-leaf" href={links.gs1Standards}>
              Learn about GS1 Standards →
            </a>
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
