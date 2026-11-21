import { StarIcon } from '../icons'

const perks = [
  { title: 'Scan first', body: 'Only one Originator per barcode.' },
  {
    title: 'Build demand',
    body: 'Every extra scan adds to the producer’s business case.',
  },
  {
    title: 'Get rewarded',
    body: 'Commission lands in your cashback wallet.',
  },
]

export function Originator() {
  return (
    <section className="band-forest">
      <div className="wrap origin-layout">
        <div className="origin-badge-wrap">
          <div className="origin-ring">
            <div className="origin-badge">
              <StarIcon />
              <strong>The Originator</strong>
              <span>First to scan · GTIN …0017</span>
            </div>
          </div>
        </div>
        <div className="origin-copy">
          <p className="eyebrow eyebrow-mint">Gamification</p>
          <h2 className="display">Be first. Become the Originator.</h2>
          <p className="lede">
            Scan a product nobody has scanned before and it’s yours. Your badge
            shows your friends you got there first. And if that producer goes on
            to pay for a life cycle assessment through one of our audit
            partners, you become eligible for a share of the commission.
          </p>
          <div className="origin-grid">
            {perks.map((perk) => (
              <div className="origin-item" key={perk.title}>
                <strong>{perk.title}</strong>
                <span>{perk.body}</span>
              </div>
            ))}
          </div>
          <p className="fine-print">
            Rewards depend on the producer commissioning an LCA via a Climate
            Savers audit partner. [TERMS LINK]
          </p>
        </div>
      </div>
    </section>
  )
}
