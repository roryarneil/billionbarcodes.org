import { useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { CarbonBudget } from '../components/subsite/CarbonBudget'
import { ProductSearch } from '../components/subsite/ProductSearch'
import { RegionNotes } from '../components/subsite/RegionNotes'
import { ThreeWay } from '../components/subsite/ThreeWay'
import { categories, products, type Category, type DisclosedProduct } from '../data/products'
import { CheckIcon } from '../icons'
import { links } from '../links'

const principles = [
  {
    title: 'Shown exactly as published',
    body: 'The kg CO2e value, its unit, life-cycle boundary, method and verification status come straight from the producer’s GS1 record.',
  },
  {
    title: 'Like-for-like comparisons only',
    body: 'We only compare products with the same unit, boundary and method, so the numbers mean the same thing.',
  },
  {
    title: 'No “green” labels',
    body: 'We don’t call products green, eco-friendly or sustainable. We show kilograms.',
  },
]

function Directory() {
  const [filter, setFilter] = useState<Category | 'All'>('All')
  const rows = products
    .filter((p): p is DisclosedProduct => p.status === 'disclosed')
    .filter((p) => filter === 'All' || p.category === filter)
    .sort((a, b) => (a.category === b.category ? a.pcf - b.pcf : a.category.localeCompare(b.category)))

  return (
    <section id="directory" className="wrap stack-28">
      <div className="section-intro">
        <p className="eyebrow">The directory</p>
        <h2 className="display">Browse disclosed products.</h2>
        <p className="lede">Sorted from lowest to highest footprint within each category. Sample data shown.</p>
      </div>
      <div className="filter-row" role="group" aria-label="Filter by category">
        {(['All', ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            className={filter === c ? 'filter-chip is-on' : 'filter-chip'}
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="table-scroll">
        <table className="directory-table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Category</th>
              <th scope="col" className="num">kg CO2e</th>
              <th scope="col">Per</th>
              <th scope="col">Boundary</th>
              <th scope="col">Verification</th>
              <th scope="col">Reward</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.gtin}>
                <td className="strong">{p.name}</td>
                <td>{p.category}</td>
                <td className="num pcf">{p.pcf.toFixed(2)}</td>
                <td>{p.unit}</td>
                <td>{p.boundary}</td>
                <td>{p.verified}</td>
                <td>
                  <a className="result-link-leaf" href={links.climateSaversRewards}>
                    Cashback
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted small">
        In the UK only, listings also show the brand’s Earthmark rating: a company-level
        score relative to its sector, not a product footprint. It isn’t shown outside the UK.
      </p>
    </section>
  )
}

export function DisclosedAlternativesPage() {
  return (
    <>
      <a className="skip-link" href="#search">
        Skip to search
      </a>
      <div className="band-forest">
        <Header
          homeHref={links.home}
          items={[
            { href: '#search', label: 'Search' },
            { href: '#directory', label: 'Directory' },
            { href: '#rewards', label: 'Rewards' },
            { href: '#legal', label: 'Legal' },
            { href: links.naughtyList, label: 'The Naughty List' },
          ]}
          cta={{ href: links.home + '/#join', label: 'Get the app' }}
        />
        <section id="search" className="wrap-subhero">
          <div className="subhero-copy">
            <p className="tag tag-mint">
              <CheckIcon />
              Disclosed Alternatives
            </p>
            <h1 className="hero-title">
              Products that
              <br />
              <span>show their numbers.</span>
            </h1>
            <p className="hero-lede">
              Search the directory of products whose producers have published a product
              carbon footprint in GS1, the global barcode system. Track them against your
              monthly budget, and get rewarded for choosing them.
            </p>
          </div>
          <ProductSearch mode="disclosed" />
        </section>
      </div>
      <main>
        <ThreeWay here="disclosed" />

        <section className="band-mint">
          <div className="wrap split">
            <div className="split-copy">
              <p className="eyebrow">Read this first</p>
              <h2 className="display">Disclosed doesn’t mean low-carbon.</h2>
              <p className="lede">
                A product is listed here because its producer published the number, not
                because the number is small. Some listed products have high footprints.
                That’s the point: you can see it, compare like with like, and decide for
                yourself.
              </p>
            </div>
            <div className="split-cards">
              {principles.map((p) => (
                <article className="white-card" key={p.title}>
                  <strong>{p.title}</strong>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Directory />

        <section id="rewards" className="band-panel">
          <div className="wrap split split-center">
            <div className="split-copy">
              <p className="eyebrow">Rewards</p>
              <h2 className="display">Get rewarded for choosing products that disclose.</h2>
              <p className="lede">
                Buy a listed product in store or online through Climate Savers and you can
                earn cashback. Every reward links straight to the product’s offer in the
                Climate Savers app.
              </p>
              <p className="muted small">
                Climate Savers may earn a commission when you buy through these links, and
                cashback is paid from it. Paid placements are always labelled “Sponsored”,
                and a listing’s position never depends on payment.
              </p>
            </div>
            <div className="reward-card">
              <span className="eyebrow">Example reward</span>
              <div className="product-row">
                <div className="photo-slot">Photo</div>
                <div>
                  <div className="product-name">The Good Roll</div>
                  <div className="product-meta">Offer in Climate Savers rewards</div>
                </div>
              </div>
              <a className="btn result-btn-dark" href={links.goodRollReward}>
                Open this reward in Climate Savers
              </a>
            </div>
          </div>
        </section>

        <CarbonBudget />

        <section id="producers" className="wrap split split-center">
          <div className="split-copy">
            <p className="eyebrow">For producers</p>
            <h2 className="display">Want to be listed? Publish your number.</h2>
            <p className="lede">
              Publish a product carbon footprint in GS1 and your product appears here
              automatically, normally within [7] days. Listing is free. You can also join
              the Climate Savers marketplace to offer cashback.
            </p>
          </div>
          <div className="stack-12">
            <a className="btn btn-forest" href="mailto:disclosed@billionbarcodes.org">
              Contact the directory team
            </a>
            <a className="btn btn-outline" href={links.home + '/#producers'}>
              Join the marketplace
            </a>
          </div>
        </section>

        <section id="legal" className="band-panel">
          <div className="wrap stack-40">
            <div className="section-intro">
              <p className="eyebrow">Legal</p>
              <h2 className="display">About this directory.</h2>
            </div>
            <article className="legal-card">
              <ul>
                <li>
                  <strong>Why a product is listed:</strong> its producer has published a
                  product carbon footprint for its barcode in GS1, with a stated unit,
                  boundary, method and verification status.
                </li>
                <li>
                  <strong>What a listing doesn’t mean:</strong> it is not a claim that a
                  product is green, eco-friendly or better for the environment in every
                  respect, and not an endorsement.
                </li>
                <li>
                  <strong>Comparisons:</strong> only between products with the same unit,
                  boundary and method.
                </li>
                <li>
                  <strong>Updates:</strong> we re-check GS1 every [7] days and show the date
                  each value was published.
                </li>
                <li>
                  <strong>Commercial relationships:</strong> we may earn commission on
                  purchases. Sponsored placements are labelled.
                </li>
                <li>
                  <strong>Brand ratings:</strong> Earthmark ratings appear in the UK only,
                  labelled as company-level scores.
                </li>
              </ul>
            </article>
            <RegionNotes
              notes={[
                {
                  region: 'United Kingdom',
                  note: 'We follow the CMA’s Green Claims Code and UK consumer law. Earthmark brand ratings are shown here only, clearly labelled.',
                },
                {
                  region: 'European Union & EEA',
                  note: 'Under Directive (EU) 2024/825 we show no sustainability labels or generic environmental claims, only the published footprint and how it was calculated.',
                },
                {
                  region: 'United States',
                  note: 'In line with the FTC Green Guides, we make no unqualified environmental benefit claims. We show the published kg CO2e figure, its unit and method.',
                },
                {
                  region: 'Canada',
                  note: 'In line with the Competition Act, we make no environmental benefit claims of our own. We show what producers have published, like-for-like.',
                },
              ]}
            />
            <p className="legal-contact">
              Corrections and questions:{' '}
              <a href="mailto:disclosed@billionbarcodes.org">disclosed@billionbarcodes.org</a>.
              Operated by Climate Fintech Limited (details below).
            </p>
          </div>
        </section>
      </main>
      <Footer homeHref={links.home} />
    </>
  )
}
