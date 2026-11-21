import { BasketIcon, ChartIcon, LeafStrokeIcon, ScanBarcodeIcon } from '../icons'

const steps = [
  {
    icon: <ScanBarcodeIcon />,
    title: '1. Scan',
    body: 'Scan the barcode on any product, in any supermarket or store.',
  },
  {
    icon: <LeafStrokeIcon />,
    title: '2. See its footprint',
    body: 'We read the product carbon footprint straight from the product’s GS1 record.',
  },
  {
    icon: <BasketIcon />,
    title: '3. Total your basket',
    body: 'Every scan adds up, so you know the CO2 of your shop before you pay.',
  },
  {
    icon: <ChartIcon />,
    title: '4. Save it to your month',
    body: 'Your basket CO2 lands on the matching bank transaction in Climate Savers.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="band-mint">
      <div className="wrap stack">
        <div className="section-intro">
          <p className="eyebrow">How it works</p>
          <h2 className="display">Like counting calories. For carbon.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.title}>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p className="muted">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
