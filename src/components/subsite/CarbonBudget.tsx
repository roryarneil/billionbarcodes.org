const rows = [
  { label: 'Netherlands average today', value: '≈1,017 kg', note: '12.2 t CO2e a year (CBS, 2023)', pct: 100, over: true },
  { label: 'UK average today', value: '≈833 kg', note: '10 t CO2e a year (Defra, 2023)', pct: 82, over: true },
  { label: 'Operational allowance (now)', value: '416 kg', note: '5 t CO2e a year, interim target', pct: 41, over: false },
  { label: '1.5°C-consistent level (2030)', value: '≈192 kg', note: '2.3 t a year (Oxfam/IEEP/SEI, CO2)', pct: 19, over: false },
]

export function CarbonBudget() {
  return (
    <section id="numbers" className="band-forest">
      <div className="wrap budget-layout">
        <div className="budget-copy">
          <p className="eyebrow eyebrow-mint">Follow the numbers</p>
          <h2 className="display">Not a traffic light. Not a badge. Kilograms.</h2>
          <p className="budget-lede">
            A B Corp logo tells you about a company’s governance. A colour or a leaf
            tells you how a product ranks against its rivals. Neither tells you how
            much carbon is in the thing in your hand. If we’re serious about climate
            change, we have to get serious about the numbers: kilograms of CO2e, per
            product, that you can add up against a budget.
          </p>
          <blockquote className="budget-quote">
            <p>
              Mike Berners-Lee, author of{' '}
              <em>How Bad Are Bananas? The Carbon Footprint of Everything</em>, suggests
              that around 5 tonnes of CO2e a year is an acceptable short-term target for
              most people in developed countries, with much lower to come as the global
              economy decarbonises.
            </p>
            <p className="budget-quote-note">
              So Climate Savers starts every member on a 416 kg monthly operational
              allowance, then steps it down towards about 192 kg, the per-person level
              consistent with 1.5°C by 2030.
            </p>
          </blockquote>
        </div>
        <div className="budget-panel">
          <strong>Your monthly carbon budget</strong>
          {rows.map((r) => (
            <div className="budget-row" key={r.label}>
              <div className="budget-row-head">
                <span className="budget-row-label">{r.label}</span>
                <span>
                  <strong className="budget-row-value">{r.value}</strong> <span className="budget-unit">a month</span>
                </span>
              </div>
              <div className="budget-bar" aria-hidden="true">
                <span className={r.over ? 'over' : 'under'} style={{ width: `${r.pct}%` }} />
              </div>
              <span className="budget-note">{r.note}</span>
            </div>
          ))}
          <span className="budget-foot">
            National averages are consumption-based footprints per person. The 2.3 t
            level counts CO2 only and was published by Oxfam, IEEP and SEI in “Carbon
            Inequality in 2030” (2021).
          </span>
        </div>
      </div>
    </section>
  )
}
