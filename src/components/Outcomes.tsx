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
          <h3>See the CO2, in kilograms</h3>
          <p>
            Products whose producers publish a carbon footprint in GS1 show the
            actual number in kg CO2e, with how it was calculated, so you can add
            it to your monthly budget. Climate Savers aims to reward you with
            cashback when you choose them.
          </p>
          <div className="kg-example">
            <span>0.38</span> kg CO2e per litre (example)
          </div>
          <a className="text-link text-link-mint" href={links.disclosedAlternatives}>
            Browse Disclosed Alternatives →
          </a>
        </article>
        <article className="outcome-card outcome-bad">
          <span className="pill pill-red">Not disclosed</span>
          <h3>It goes on the Naughty List</h3>
          <p>
            If a producer doesn’t publish its footprint, the product is listed
            publicly, and we show you a disclosed alternative that does. You can buy
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
            Search the Naughty List →
          </a>
        </article>
      </div>
    </section>
  )
}
