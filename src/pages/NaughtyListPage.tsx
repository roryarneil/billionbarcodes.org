import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { CarbonBudget } from '../components/subsite/CarbonBudget'
import { ProductSearch } from '../components/subsite/ProductSearch'
import { RegionNotes } from '../components/subsite/RegionNotes'
import { ThreeWay } from '../components/subsite/ThreeWay'
import { AlertIcon } from '../icons'
import { links } from '../links'

const reasons = [
  {
    title: 'Disclosure, not perfection',
    body: 'There are low-carbon and high-carbon products. A high footprint, published honestly, keeps a product off this list. Silence doesn’t.',
  },
  {
    title: 'A market mechanism',
    body: 'When regulation keeps getting pulled back, shoppers can still hold powerful brands to account, one scan at a time.',
  },
]

const producerSteps = [
  {
    num: '01',
    title: 'Publish your PCF to GS1',
    body: 'Use the carbon footprint attributes in GS1’s data synchronisation network (from release 3.1.31). Methods we accept include ISO 14067, the GHG Protocol Product Standard, PACT and PEF.',
  },
  {
    num: '02',
    title: 'Come off automatically',
    body: 'We re-check GS1 every [7] days. Once a value appears, your product moves to Disclosed Alternatives.',
  },
  {
    num: '03',
    title: 'In a hurry? Tell us',
    body: 'Email the GS1 record or your LCA report and we’ll mark the listing “update pending” within [2] business days.',
  },
]

export function NaughtyListPage() {
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
            { href: '#why', label: 'Why a Naughty List?' },
            { href: '#producers', label: 'For producers' },
            { href: '#legal', label: 'Legal' },
            { href: links.disclosedAlternatives, label: 'Disclosed Alternatives' },
          ]}
          cta={{ href: links.home + '/#join', label: 'Get the app' }}
          ctaClass="btn btn-coral"
        />
        <section id="search" className="wrap-subhero">
          <div className="subhero-copy">
            <p className="tag tag-coral">
              <AlertIcon />
              The Naughty List
            </p>
            <h1 className="hero-title hero-title-coral">
              It’s 2026.
              <br />
              <span>Show us your numbers.</span>
            </h1>
            <p className="hero-lede">
              Search any product to see whether its producer has published its carbon
              footprint. If they haven’t, it’s on the Naughty List, and every scan tells
              them that you want to know.
            </p>
          </div>
          <ProductSearch mode="naughty" />
        </section>
      </div>
      <main>
        <ThreeWay here="naughty" />

        <section id="why" className="band-naughty">
          <div className="wrap split">
            <div className="split-copy">
              <p className="eyebrow eyebrow-danger">Why a Naughty List?</p>
              <h2 className="display">“Do it now, or you’re going on my naughty list.”</h2>
              <p className="naughty-text">
                Every parent knows the line. It’s said with a smile, but it means
                something: there’s a simple thing you should have done, and there will be
                consequences if you don’t.
              </p>
              <p className="naughty-text">
                It’s 2026. The methods for measuring a product’s carbon footprint have
                existed for years, and since May 2025 the global barcode system, GS1, has
                had a standard field to publish it. In our view, leaving that field blank
                is no longer a technical problem. It’s a choice, and shoppers can see it.
              </p>
            </div>
            <div className="split-cards">
              <article className="white-card">
                <strong>{reasons[0].title}</strong>
                <p>{reasons[0].body}</p>
              </article>
              <article className="white-card">
                <strong>Transparency over opacity</strong>
                <p>
                  You can’t manage what you can’t see. Read the thesis behind it at{' '}
                  <a className="inline-red" href={links.obaac}>
                    OBaaC.org
                  </a>
                  .
                </p>
              </article>
              <article className="white-card">
                <strong>{reasons[1].title}</strong>
                <p>{reasons[1].body}</p>
              </article>
            </div>
          </div>
        </section>

        <CarbonBudget />

        <section id="producers" className="wrap stack-40">
          <div className="section-intro">
            <p className="eyebrow">For producers</p>
            <h2 className="display">Getting off the list is simple: publish your number.</h2>
            <p className="lede">
              Any value, calculated with any recognised method, takes your product off
              the Naughty List.
            </p>
          </div>
          <div className="problem-grid">
            {producerSteps.map((step) => (
              <article className="problem-card" key={step.num}>
                <span className="problem-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p className="muted">{step.body}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn btn-forest" href="mailto:naughtylist@billionbarcodes.org">
              Contact the Naughty List team
            </a>
            <a className="btn btn-outline" href={links.home + '/#producers'}>
              Need an LCA? Talk to an audit partner
            </a>
          </div>
        </section>

        <section id="legal" className="band-panel">
          <div className="wrap stack-40">
            <div className="section-intro">
              <p className="eyebrow">Legal</p>
              <h2 className="display">What the Naughty List is, and isn’t.</h2>
            </div>
            <div className="legal-grid">
              <article className="legal-card">
                <h3>In practice</h3>
                <ul>
                  <li>
                    <strong>What a listing means:</strong> as of the date shown, we could
                    not find a product carbon footprint for that barcode in the GS1 data
                    available to us, and shoppers have scanned it asking for one.
                  </li>
                  <li>
                    <strong>What it doesn’t mean:</strong> it is not an allegation that the
                    producer has broken any law or made a false claim, and not a statement
                    that the product has a high footprint. Some producers may have measured
                    but not yet published.
                  </li>
                  <li>
                    <strong>How a product is listed:</strong> it has been scanned at least
                    [N] times and no footprint value is found in GS1 for its GTIN.
                  </li>
                  <li>
                    <strong>How it comes off:</strong> automatically, at our next GS1 check
                    after a value is published, normally within [7] days.
                  </li>
                  <li>
                    <strong>Our sources:</strong> GS1 product data and anonymous scan
                    counts. We never estimate or invent a footprint for a listed product.
                  </li>
                  <li>
                    <strong>The Originator:</strong> shown only under a display name the
                    member opted in to. Otherwise, “Anonymous Originator”.
                  </li>
                </ul>
              </article>
              <article className="legal-card">
                <h3>The legal standpoint</h3>
                <ul>
                  <li>Each listing is a dated statement of fact that anyone can check against GS1.</li>
                  <li>
                    “Naughty” is our shorthand for “not disclosed yet”. The view that
                    producers should publish is our opinion, clearly presented as such.
                  </li>
                  <li>
                    Producers have a right of reply: a statement of up to [300] words,
                    published alongside the listing.
                  </li>
                  <li>If we get something wrong, we correct or remove it promptly and say so.</li>
                </ul>
              </article>
            </div>
            <RegionNotes
              notes={[
                {
                  region: 'United Kingdom',
                  note: 'We follow UK defamation and consumer protection law, including the CMA’s Green Claims Code. Listings are factual, dated and correctable.',
                },
                {
                  region: 'European Union & EEA',
                  note: 'We follow each Member State’s rules on environmental claims under Directive (EU) 2024/825. We show published data, never a sustainability label or a generic “green” claim.',
                },
                {
                  region: 'United States',
                  note: 'We follow the FTC Green Guides and state consumer protection and privacy laws. Listings state verifiable facts about published data.',
                },
                {
                  region: 'Canada',
                  note: 'We follow the Competition Act’s rules on environmental claims and federal and provincial privacy law, including Quebec’s Law 25.',
                },
              ]}
            />
            <p className="legal-contact">
              Corrections and complaints:{' '}
              <a href="mailto:naughtylist@billionbarcodes.org">naughtylist@billionbarcodes.org</a>. We
              aim to respond within [5] business days. Operated by Climate Fintech Limited
              (details below).
            </p>
          </div>
        </section>
      </main>
      <Footer homeHref={links.home} />
    </>
  )
}
