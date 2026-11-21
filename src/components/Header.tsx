import { BarcodeMark } from '../icons'
import { links } from '../links'

export function Header() {
  return (
    <header className="header-bar">
      <nav className="nav" aria-label="Main">
        <a href="#top" className="brand" aria-label="Billion Barcodes by Climate Savers – home">
          <BarcodeMark />
          <span className="brand-text">
            <span className="brand-name">Billion Barcodes</span>
            <img
              className="brand-mark"
              src="/climatesavers-wordmark.png"
              alt=""
            />
          </span>
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href={links.naughtyList}>The Naughty List</a>
          <a href={links.greenAlternatives}>Green Alternatives</a>
          <a href="#producers">For producers</a>
          <a className="btn btn-mint" href="#join">
            Join the waitlist
          </a>
        </div>
      </nav>
    </header>
  )
}
