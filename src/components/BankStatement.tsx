const lines = [
  ['Oatfield Barista Oat Drink 1 L', '0.38 kg'],
  ['Leafline Eco Laundry Liquid 1.5 L', '0.90 kg'],
  ['Highmoor Cheddar 400 g', '2.84 kg'],
]

export function BankStatement() {
  return (
    <section className="wrap bank-layout">
      <div className="bank-copy">
        <p className="eyebrow">From estimate to actual</p>
        <h2 className="display">Your basket, itemised on your bank statement.</h2>
        <p className="lede">
          Climate Savers already estimates the CO2 of every card payment. Scanned
          products replace that estimate with each product’s actual footprint,
          listed line by line under the transaction.
        </p>
      </div>
      <div className="statement">
        <div className="statement-head">
          <div>
            <strong>€38.40 · Supermarket</strong>
            <div>
              <span>Today · 3 scanned items</span>
            </div>
          </div>
          <div className="carbon">
            <span className="carbon-label">Carbon</span>
            <strong>+4.12 kg</strong>
          </div>
        </div>
        <div className="statement-lines">
          {lines.map(([name, kg]) => (
            <div className="statement-line" key={name}>
              <span>{name}</span>
              <span>{kg}</span>
            </div>
          ))}
        </div>
        <div className="statement-note">
          <span className="actual-pill">Actual</span>
          <span>Replaces the merchant-based estimate</span>
        </div>
      </div>
    </section>
  )
}
