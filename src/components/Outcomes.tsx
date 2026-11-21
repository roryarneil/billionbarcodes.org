import { LeafRating } from '../icons'
import { links } from '../links'

export function Outcomes() {
  return (
    <section className="wrap">
      <div className="section-intro">
        <p className="eyebrow">Every scan has an outcome</p>
        <h2 className="display">
          Transparent products get rewarded. Silent ones get listed.
        </h2>
      </div>
      <div className="outcome-grid">
        <article className="outcome-card outcome-good">
          <span className="pill pill-mint">Footprint disclosed</span>
          <h3>See the CO2 and a 5-leaf rating</h3>
          <p>
            Products with a certified life cycle assessment show their footprint
            and a leaf rating, a bit like Nutri-Score for carbon. Climate Savers
            aims to reward you with cashback when you choose an LCA-certified
            product.
          </p>
          <LeafRating
            size={30}
            fill="#58ffce"
            empty="#58ffce"
            label="Example rating: 4 of 5 leaves"
          />
          <a className="text-link text-link-mint" href={links.greenAlternatives}>
            Browse Green Alternatives →
          </a>
        </article>
        <article className="outcome-card outcome-bad">
          <span className="pill pill-red">Not disclosed</span>
          <h3>It goes on the Naughty List</h3>
          <p>
            If a producer won’t publish its footprint, the product is listed
            publicly, and we show you a green alternative that does. You can buy
            it in store, or online through the retailer or the Climate Savers
            marketplace.
          </p>
          <div className="demand">
            <div className="avatars" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>
              <strong>1,284 shoppers</strong> want to know this product’s
              footprint <span className="example">(example)</span>
            </p>
          </div>
          <a className="text-link text-link-red" href={links.naughtyList}>
            View the Naughty List →
          </a>
        </article>
      </div>
    </section>
  )
}
