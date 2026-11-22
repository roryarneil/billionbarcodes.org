import { links } from '../links'
import { Brand } from './Brand'

export type NavItem = { href: string; label: string }

type HeaderProps = {
  homeHref?: string
  items?: NavItem[]
  cta?: NavItem
  ctaClass?: string
}

const landingItems: NavItem[] = [
  { href: '#how', label: 'How it works' },
  { href: links.naughtyList, label: 'The Naughty List' },
  { href: links.greenAlternatives, label: 'Green Alternatives' },
  { href: '#producers', label: 'For producers' },
]

export function Header({
  homeHref = '#top',
  items = landingItems,
  cta = { href: '#join', label: 'Join the waitlist' },
  ctaClass = 'btn btn-mint',
}: HeaderProps) {
  return (
    <header className="header-bar">
      <nav className="nav" aria-label="Main">
        <Brand href={homeHref} />
        <div className="nav-links">
          {items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className={ctaClass} href={cta.href}>
            {cta.label}
          </a>
        </div>
      </nav>
    </header>
  )
}
