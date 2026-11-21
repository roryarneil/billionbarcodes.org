import { type FormEvent, useState } from 'react'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    setJoined(true)
  }

  return (
    <section id="join" className="waitlist">
      <h2 className="waitlist-title">
        There are around a billion barcodes in the world.{' '}
        <span className="highlight">Help us scan them.</span>
      </h2>
      <p className="lede">
        Be first in line when barcode scanning launches in the Climate Savers
        mobile app.
      </p>
      {joined ? (
        <p className="waitlist-done" role="status">
          You’re on the list. We’ll email {email} when scanning launches.
        </p>
      ) : (
        <form className="waitlist-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <button className="btn btn-waitlist" type="submit">
            Join the waitlist
          </button>
        </form>
      )}
    </section>
  )
}
