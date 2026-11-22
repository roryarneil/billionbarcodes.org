import { LeafRating, ProductBarcode } from '../icons'
import { links } from '../links'

export function Hero() {
  return (
    <section id="top" className="wrap-hero">
      <div className="hero-copy">
        <p className="kicker">The MyFitnessPal of product carbon footprinting</p>
        <h1 className="hero-title">
          Scan a barcode.
          <br />
          <span>See its carbon.</span>
        </h1>
        <p className="hero-lede">
          Point your phone at any product in any store. Get its product carbon
          footprint, total up your basket, and save it to your monthly lifestyle
          emissions in the Climate Savers app.
        </p>
        <div className="hero-actions">
          <a className="btn btn-mint-lg" href="#join">
            Help scan a billion barcodes
          </a>
          <a className="btn btn-ghost" href={links.naughtyList}>
            See the Naughty List
          </a>
        </div>
        <a className="count-card" href={links.humanChain}>
          <div className="count-row">
            <span>[LIVE COUNT] barcodes scanned</span>
            <span>of ~1,000,000,000</span>
          </div>
          <div className="progress" aria-hidden="true">
            <span />
          </div>
          <div className="count-note">
            <span className="status">Every barcode you scan raises your profile status.</span>
            <span className="go">See your status on HumanChain →</span>
          </div>
        </a>
      </div>

      <div className="hero-phone">
        <div className="phone">
          <div className="phone-screen">
            <div className="scan-stage">
              <div className="viewfinder">
                <ProductBarcode />
                <div className="scan-line" />
              </div>
            </div>
            <div className="phone-body">
              <div className="product-row">
                <div className="photo-slot">Photo</div>
                <div>
                  <div className="product-name">Oatfield Barista Oat Drink</div>
                  <div className="product-meta">1 L · GTIN 8710000000017</div>
                </div>
              </div>
              <div className="footprint-card">
                <div>
                  <div className="footprint-label">Product carbon footprint</div>
                  <div className="footprint-value">
                    0.38 <span>kg CO2e</span>
                  </div>
                </div>
                <LeafRating label="LCA rating 4 of 5 leaves" />
              </div>
              <div className="add-basket">Add to basket · +0.38 kg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
