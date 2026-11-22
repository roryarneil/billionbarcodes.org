import { ScanBarcodeIcon, SearchIcon } from '../../icons'
import { links } from '../../links'

type Here = 'naughty' | 'disclosed'

const answers = [
  {
    key: 'naughty',
    tone: 'naughty',
    pill: 'pill pill-red',
    title: 'On the Naughty List',
    body: 'No product carbon footprint found in GS1. The producer hasn’t disclosed, yet.',
    href: links.naughtyList,
    link: 'Search the Naughty List',
  },
  {
    key: 'disclosed',
    tone: 'disclosed',
    pill: 'pill pill-mint',
    title: 'In Disclosed Alternatives',
    body: 'The producer has published a product carbon footprint in GS1, whatever the number.',
    href: links.disclosedAlternatives,
    link: 'Search Disclosed Alternatives',
  },
  {
    key: 'unscanned',
    tone: 'unscanned',
    pill: 'pill pill-forest',
    title: 'Not scanned yet',
    body: 'On neither list, because nobody has scanned it. Be first and become The Originator.',
    href: links.home + '/#join',
    link: 'Get the app',
  },
] as const

export function ThreeWay({ here }: { here: Here }) {
  return (
    <section id="how" className="wrap stack-40">
      <div className="section-intro">
        <p className="eyebrow">How it works</p>
        <h2 className="display">Two steps. Three possible answers.</h2>
      </div>
      <div className="two-steps">
        <div className="dark-step">
          <span className="dark-step-icon">
            <ScanBarcodeIcon />
          </span>
          <div>
            <strong>Step 1 · Scan a barcode</strong>
            <span>In any store, with the Climate Savers app, or search by name or barcode number here.</span>
          </div>
        </div>
        <div className="dark-step">
          <span className="dark-step-icon">
            <SearchIcon size={26} />
          </span>
          <div>
            <strong>Step 2 · See where it stands</strong>
            <span>
              Every product is in exactly one of three places. If it isn’t on one list,
              it’s on the other, or it hasn’t been scanned.
            </span>
          </div>
        </div>
      </div>
      <div className="answer-grid">
        {answers.map((a) => (
          <article key={a.key} className={`answer-card answer-${a.tone}`}>
            <div className="answer-head">
              <span className={a.pill}>{a.title}</span>
              {a.key === here && <span className="answer-here">(this page)</span>}
            </div>
            <p>{a.body}</p>
            <a href={a.href}>{a.link} →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
