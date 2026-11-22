import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { RegionNotes } from '../components/subsite/RegionNotes'
import { LevelAvatar, StarIcon, type Level } from '../icons'
import { links } from '../links'

const steps = [
  {
    num: '01',
    title: 'Scan in any store',
    body: 'Point the Climate Savers app at any barcode. We check GS1 for the product’s carbon footprint.',
  },
  {
    num: '02',
    title: 'Nobody’s scanned it? It’s yours',
    body: 'If you’re the first, you become its Originator. Only one per barcode, and your badge names the product.',
  },
  {
    num: '03',
    title: 'Every scan after yours counts',
    body: 'Each shopper who scans it next adds to the demand the producer sees, building the case for publishing a footprint.',
  },
  {
    num: '04',
    title: 'Get rewarded if they act',
    body: 'If the producer commissions a life cycle assessment through one of our audit partners, you’re eligible for a share of the commission.',
  },
]

const levels: { level: Level; name: string; min: number; note: string }[] = [
  { level: 'newb', name: 'Newb', min: 1, note: 'Your first original scan' },
  { level: 'rookie', name: 'Rookie', min: 10, note: 'Getting the hang of it' },
  { level: 'guardian', name: 'Guardian', min: 50, note: 'Looking out for the shelves' },
  { level: 'legend', name: 'Legend', min: 250, note: 'A force producers notice' },
]

const rewards = [
  {
    title: 'When a producer acts',
    body: 'If the producer of a product you originated commissions a life cycle assessment through a Climate Savers audit partner, you’re eligible for a share of the commission.',
  },
  {
    title: 'Paid to your cashback wallet',
    body: 'Your share lands in your Climate Savers cashback wallet, alongside rewards for choosing disclosed products.',
  },
  {
    title: 'Counted either way',
    body: 'Whether or not a producer acts, every product you originate still counts towards your status.',
  },
]

function OriginatorBadge({ level, title, detail }: { level: Level; title: string; detail: string }) {
  return (
    <div className="hc-badge">
      <span className="hc-badge-icon">
        <LevelAvatar level={level} size={46} />
      </span>
      <span className="hc-badge-text">
        <strong>{title}</strong>
        <span>{detail}</span>
      </span>
    </div>
  )
}

export function OriginatorPage() {
  return (
    <>
      <a className="skip-link" href="#how">
        Skip to content
      </a>
      <div className="band-forest">
        <Header
          homeHref={links.home}
          items={[
            { href: '#how', label: 'How it works' },
            { href: '#status', label: 'Your status' },
            { href: '#human-chain', label: 'Human Chain' },
            { href: '#rewards', label: 'Rewards' },
            { href: '#privacy', label: 'Privacy' },
          ]}
          cta={{ href: links.home + '/#join', label: 'Get the app' }}
        />
        <section id="top" className="wrap-hero origin-hero">
          <div className="hero-copy">
            <p className="tag tag-mint">
              <StarIcon />
              The Originator
            </p>
            <h1 className="hero-title">
              First to scan.
              <br />
              <span>First to make it count.</span>
            </h1>
            <p className="hero-lede">
              Whether you’re a Newb or a Legend, you can make a genuine difference
              through Climate Savers. Scan a product nobody has scanned before, and you
              become its Originator.
            </p>
            <div className="hero-actions">
              <a className="btn btn-mint-lg" href={links.home + '/#join'}>
                Start scanning
              </a>
              <a className="btn btn-ghost" href="#human-chain">
                See your badge on the Human Chain
              </a>
            </div>
          </div>
          <div className="origin-art">
            <img
              src="/originator/community.png"
              alt="Paper-craft illustration of neighbours chatting, cycling and tending plants on a green street"
              width={522}
              height={396}
            />
            <div className="origin-seal" aria-hidden="true">
              <div>
                <StarIcon />
                <span>
                  The
                  <br />
                  Originator
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main>
        <section id="how" className="wrap split split-center origin-how">
          <div className="origin-shop">
            <img
              src="/originator/shopfront.png"
              alt="Paper-craft illustration of a green shopfront with an electric car and a cyclist outside"
              width={516}
              height={386}
            />
          </div>
          <div className="split-copy">
            <p className="eyebrow">How it works</p>
            <h2 className="display">Be the first to ask the question.</h2>
            {steps.map((s) => (
              <div className="origin-step" key={s.num}>
                <span className="origin-step-num">{s.num}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p className="muted">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="status" className="band-forest">
          <div className="wrap stack-40">
            <div className="section-intro origin-status-intro">
              <p className="eyebrow eyebrow-mint">Your status</p>
              <p className="origin-quote">
                “Remember, whether you earn cashback or not, your contribution will not go
                unnoticed <span>(if you want it to)</span>.”
              </p>
              <p className="budget-lede">
                Every product you originate grows your status in Climate Savers. Keep it
                private, or show it off: it’s your call.
              </p>
            </div>
            <div className="level-grid">
              {levels.map((l) => (
                <article className="level-card" key={l.level}>
                  <span className="level-face">
                    <LevelAvatar level={l.level} size={78} />
                  </span>
                  <strong>{l.name}</strong>
                  <span className="level-min">
                    <b>{l.min}+</b> products originated
                  </span>
                  <span className="level-note">{l.note}</span>
                </article>
              ))}
            </div>
            <div className="level-progress">
              <div className="level-progress-who">
                <LevelAvatar level="rookie" size={56} />
                <div>
                  <strong>Alex is a Rookie</strong>
                  <span>12 products originated (example)</span>
                </div>
              </div>
              <div className="level-progress-bar">
                <div className="level-bar" aria-hidden="true">
                  <span style={{ width: '5%' }} />
                </div>
                <span>
                  <b>38</b> products to the next level, Guardian
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="human-chain" className="band-mint">
          <div className="wrap split split-center">
            <div className="split-copy">
              <p className="eyebrow">Human Chain</p>
              <h2 className="display">Publish your badge on the Human Chain.</h2>
              <p className="lede">
                The{' '}
                <a className="inline-leaf" href={links.humanChain}>
                  Human Chain
                </a>{' '}
                links people taking climate action, hand in hand. When you join from
                Climate Savers, you’ll have the option to show your Originator status on
                your profile, next to your Instagram, Bluesky or LinkedIn.
              </p>
              <ul className="origin-list">
                <li>
                  <strong>Off until you say so.</strong> Your status only appears if you
                  tick “Show my Originator status”.
                </li>
                <li>
                  <strong>Your name, your choice.</strong> Only your first name is shown,
                  and you can hide your badge at any time.
                </li>
                <li>
                  <strong>It updates itself.</strong> As you originate more products, your
                  badge levels up.
                </li>
              </ul>
              <div className="hero-actions">
                <a className="btn result-btn-dark on-mint" href={links.humanChain}>
                  Visit the Human Chain
                </a>
              </div>
            </div>
            <div className="hc-card">
              <span className="hc-card-label">On the Human Chain</span>
              <div className="hc-person">
                <span className="hc-avatar">A</span>
                <div>
                  <strong>Alex</strong>
                  <span>
                    <span className="nl-flag" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    Netherlands · from Climate Savers
                  </span>
                </div>
              </div>
              <OriginatorBadge level="rookie" title="The Originator · Rookie" detail="12 products originated" />
              <span className="hc-card-note">
                Shown only because Alex ticked “Show my Originator status”.
              </span>
            </div>
          </div>
        </section>

        <section id="rewards" className="wrap stack-40">
          <div className="section-intro">
            <p className="eyebrow">Rewards</p>
            <h2 className="display">Your badge is yours for keeps. The cashback is a bonus.</h2>
          </div>
          <div className="problem-grid">
            {rewards.map((r) => (
              <article className="problem-card" key={r.title}>
                <h3>{r.title}</h3>
                <p className="muted">{r.body}</p>
              </article>
            ))}
          </div>
          <p className="muted small">
            Rewards depend on the producer commissioning an LCA via a Climate Savers audit
            partner. [TERMS LINK]
          </p>
        </section>

        <section id="privacy" className="band-panel">
          <div className="wrap stack-40">
            <div className="section-intro">
              <p className="eyebrow">Privacy</p>
              <h2 className="display">You decide who sees your status.</h2>
            </div>
            <RegionNotes
              title={null}
              notes={[
                {
                  region: 'Anonymous by default',
                  note: 'Until you opt in, you appear as “Anonymous Originator” on the Naughty List and in the app.',
                },
                {
                  region: 'Separate choices',
                  note: 'Showing your name and showing your Originator status are two separate tick boxes. Tick one, both or neither.',
                },
                {
                  region: 'Change your mind any time',
                  note: 'Hide your badge or delete your Originator name in Settings, in Climate Savers or on the Human Chain.',
                },
                {
                  region: 'Nothing more than you choose',
                  note: 'We never show your email, full name, location or when you scanned. See our Privacy Notice [LINK].',
                },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer homeHref={links.home} />
    </>
  )
}
