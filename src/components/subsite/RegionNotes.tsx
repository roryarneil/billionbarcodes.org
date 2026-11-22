export type RegionNote = { region: string; note: string }

export function RegionNotes({ notes }: { notes: RegionNote[] }) {
  return (
    <>
      <h3 className="region-title">Where we operate</h3>
      <div className="region-grid">
        {notes.map((n) => (
          <article className="region-card" key={n.region}>
            <strong>{n.region}</strong>
            <p>{n.note}</p>
          </article>
        ))}
      </div>
    </>
  )
}
