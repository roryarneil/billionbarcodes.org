import { links } from '../links'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>Climate Savers</strong>
          <span>Save money and get rewarded for living sustainably.</span>
        </div>
        <div className="footer-links">
          <a href={links.climateSaversApp}>app.climatesavers.io</a>
          <a href={links.naughtyList}>The Naughty List</a>
          <a href={links.greenAlternatives}>Green Alternatives</a>
          <a href="#producers">For producers</a>
        </div>
      </div>
    </footer>
  )
}
