export type RegionNote = { region: string; note: string }

export function RegionNotes({
  notes,
  title = 'Where we operate',
}: {
  notes: RegionNote[]
  title?: string | null
}) {
  return (
    <>
      {title && <h3 className="region-title">{title}</h3>}
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
