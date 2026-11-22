const problems = [
  {
    num: '01',
    title: 'No carbon on the label',
    body: 'Supermarket shelves and online shops don’t show CO2, so shoppers can’t make an informed choice.',
  },
  {
    num: '02',
    title: 'Banks only guess',
    body: 'Spend-based tracking estimates CO2 by merchant, so €50 of red meat looks the same as €50 of lettuce.',
  },
  {
    num: '03',
    title: 'The field is there. It’s blank.',
    body: 'Since May 2025 the GS1 barcode data model has a CO2 attribute. Most producers leave it empty.',
  },
]

export function WhyItMatters() {
  return (
    <section className="wrap">
      <div className="section-intro">
        <p className="eyebrow">Why this matters</p>
        <h2 className="display">You can’t manage carbon emissions you can’t see.</h2>
      </div>
      <div className="problem-grid">
        {problems.map((item) => (
          <article className="problem-card" key={item.num}>
            <span className="problem-num">{item.num}</span>
            <h3>{item.title}</h3>
            <p className="muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
