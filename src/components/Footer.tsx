import { links } from '../links'
import { Brand } from './Brand'

type FooterProps = {
  homeHref?: string
}

export function Footer({ homeHref = '#top' }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Brand href={homeHref} label="Billion Barcodes by Climate Savers – back to top" />
          <span>Save money and get rewarded for living sustainably.</span>
        </div>
        <div className="footer-links">
          <a href={links.climateSaversApp}>app.climatesavers.io</a>
          <a href={links.naughtyList}>The Naughty List</a>
          <a href={links.greenAlternatives}>Green Alternatives</a>
          <a href={homeHref === '#top' ? '#producers' : links.home + '/#producers'}>For producers</a>
        </div>
      </div>
      <div className="footer-legal">
        <p>
          Climate Fintech Limited is a company registered in England and Wales under
          company number{' '}
          <a href="https://find-and-update.company-information.service.gov.uk/company/11963392">
            11963392
          </a>{' '}
          with its registered office at Cooper House, Shepton Mallet, Somerset BA4
          5QE. Climate Fintech Limited (
          <a href="https://register.fca.org.uk/s/firm?id=0014G00002pnWSiQAM">FRN: 958410</a>
          ) provide regulated account information as an agent of Plaid Financial Ltd
          which is authorised by the Financial Conduct Authority under the Payment
          Services Regulations 2017 (
          <a href="https://register.fca.org.uk/s/firm?id=0010X000049JuDPQA0">FRN: 804718</a>
          ) for the provision of payment services. Where Climate Savers is available in
          the EU, account information services are provided by Plaid B.V. which is an
          authorised payment institution regulated by the Dutch Central Bank under the
          Dutch Financial Supervision Act for the provision of payment services (account
          information services) (License number:{' '}
          <a href="https://www.dnb.nl/en/public-register/information-detail/?registerCode=WFTBI&relationNumber=R179714">
            R179714
          </a>
          ).
        </p>
      </div>
    </footer>
  )
}
