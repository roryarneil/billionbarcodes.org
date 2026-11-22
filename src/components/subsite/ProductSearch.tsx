import { useState } from 'react'
import { findProduct, shareOfAllowance, type DisclosedProduct, type NaughtyProduct } from '../../data/products'
import { AlertIcon, CheckIcon, ScanBarcodeIcon, SearchIcon, StarIcon } from '../../icons'
import { links } from '../../links'

type Mode = 'naughty' | 'disclosed'

const examples = {
  naughty: [
    { label: 'Brightwash Laundry Liquid', query: 'Brightwash' },
    { label: 'Oatfield Barista Oat Drink', query: 'Oatfield' },
    { label: '8710000000048', query: '8710000000048' },
  ],
  disclosed: [
    { label: 'Oatfield Barista Oat Drink', query: 'Oatfield' },
    { label: 'Brightwash Laundry Liquid', query: 'Brightwash' },
    { label: '8710000000048', query: '8710000000048' },
  ],
}

// Search a product by name or barcode and show which of the three places it sits in.
export function ProductSearch({ mode }: { mode: Mode }) {
  const [query, setQuery] = useState('')
  const [asked, setAsked] = useState(false)
  const product = findProduct(query)
  const trimmed = query.trim()

  const label =
    mode === 'naughty'
      ? 'Is it on the Naughty List? Search by product name or barcode number'
      : 'Is it in Disclosed Alternatives? Search by product name or barcode number'

  return (
    <>
      <div className={`search-card search-${mode}`}>
        <label htmlFor="product-search">{label}</label>
        <div className="search-row">
          <div className="search-field">
            <SearchIcon />
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setAsked(false)
              }}
              placeholder="e.g. Brightwash, or 8710000000024"
              autoComplete="off"
            />
          </div>
          <a className="btn search-scan" href={links.home + '/#join'}>
            <ScanBarcodeIcon />
            Scan with the app
          </a>
        </div>
        <div className="search-examples">
          <span>Try an example:</span>
          {examples[mode].map((ex) => (
            <button
              key={ex.query}
              type="button"
              onClick={() => {
                setQuery(ex.query)
                setAsked(false)
              }}
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      <div className="search-results" aria-live="polite">
        {!trimmed && (
          <p className="search-hint">
            Results appear here. Each product is on the Naughty List, in Disclosed
            Alternatives, or not scanned yet.
          </p>
        )}
        {product?.status === 'naughty' && (
          <NaughtyResult product={product} mode={mode} asked={asked} onAsk={() => setAsked(true)} />
        )}
        {product?.status === 'disclosed' && <DisclosedResult product={product} mode={mode} />}
        {trimmed && !product && <UnscannedResult query={trimmed} />}
      </div>
    </>
  )
}

function NaughtyResult({
  product,
  mode,
  asked,
  onAsk,
}: {
  product: NaughtyProduct
  mode: Mode
  asked: boolean
  onAsk: () => void
}) {
  const scans = (product.scans + (asked ? 1 : 0)).toLocaleString('en-GB')
  if (mode === 'disclosed') {
    return (
      <div className="result result-naughty result-split">
        <div className="result-main">
          <span className="pill pill-red pill-icon">
            <AlertIcon size={16} />
            Not disclosed: on the Naughty List
          </span>
          <span className="result-name">{product.name}</span>
          <p>
            No product carbon footprint found in GS1 for this barcode as of{' '}
            {product.checked}. {scans} shoppers have asked for it. Products in the
            same category that do disclose are listed in the directory below.
          </p>
        </div>
        <div className="result-actions">
          <a className="btn result-btn-dark on-mint" href="#directory">
            See disclosed {product.category.toLowerCase()}
          </a>
          <a className="result-link-red" href={links.naughtyList}>
            View on the Naughty List
          </a>
        </div>
      </div>
    )
  }
  return (
    <div className="result result-naughty result-split">
      <div className="result-main">
        <span className="pill pill-red pill-icon">
          <AlertIcon size={16} />
          On the Naughty List
        </span>
        <span className="result-name">{product.name}</span>
        <span className="result-meta">
          GTIN {product.gtin} · {product.category}
        </span>
        <p>
          No product carbon footprint found in GS1 for this barcode, as of{' '}
          <strong>{product.checked}</strong>.
        </p>
        <span className="result-meta">
          Originator: <strong>{product.originator}</strong>
        </span>
      </div>
      <div className="result-actions">
        <div className="demand-count">
          <span>{scans}</span>
          shoppers want to know this product’s footprint. We share this with the
          producer.
        </div>
        <button type="button" className="btn result-btn-dark" onClick={onAsk} aria-pressed={asked}>
          {asked ? 'Counted. Thanks for asking.' : 'I want to know too'}
        </button>
        <a className="btn result-btn-mint" href={links.disclosedAlternatives}>
          See disclosed alternatives
        </a>
        <a className="result-link-red" href="#producers">
          Are you the producer? Get off the list
        </a>
      </div>
    </div>
  )
}

function DisclosedResult({ product, mode }: { product: DisclosedProduct; mode: Mode }) {
  const pcf = product.pcf.toFixed(2)
  if (mode === 'naughty') {
    return (
      <div className="result result-disclosed result-split">
        <div className="result-main">
          <span className="pill pill-mint pill-icon">
            <CheckIcon size={16} />
            Not on the Naughty List
          </span>
          <span className="result-name">{product.name}</span>
          <span className="result-meta">GTIN {product.gtin} · listed in Disclosed Alternatives</span>
          <p>
            Its producer has published a product carbon footprint in GS1:{' '}
            <strong>
              {pcf} kg CO2e {product.unit}
            </strong>{' '}
            ({product.method}). That’s {shareOfAllowance(product.pcf)} of a 416 kg
            monthly allowance.
          </p>
        </div>
        <div className="result-actions">
          <a className="btn result-btn-dark on-mint" href={links.disclosedAlternatives}>
            View in Disclosed Alternatives
          </a>
        </div>
      </div>
    )
  }
  return (
    <div className="result result-disclosed result-split">
      <div className="result-main">
        <span className="pill pill-mint pill-icon">
          <CheckIcon size={16} />
          Listed in Disclosed Alternatives
        </span>
        <span className="result-name">{product.name}</span>
        <span className="result-meta">
          GTIN {product.gtin} · {product.category}
        </span>
        <dl className="result-facts">
          <div>
            <dt>Boundary</dt>
            <dd>{product.boundary}</dd>
          </div>
          <div>
            <dt>Method</dt>
            <dd>{product.method}</dd>
          </div>
          <div>
            <dt>Verification</dt>
            <dd>{product.verified}</dd>
          </div>
          <div>
            <dt>Published</dt>
            <dd>{product.published}</dd>
          </div>
        </dl>
      </div>
      <div className="result-actions">
        <div className="pcf-panel">
          <span className="pcf-label">Product carbon footprint, as published</span>
          <span className="pcf-value">
            {pcf}
            <small> kg CO2e</small>
          </span>
          <span className="pcf-note">
            {product.unit} · {shareOfAllowance(product.pcf)} of your 416 kg monthly allowance
          </span>
        </div>
        <a className="btn result-btn-mint" href={links.climateSaversRewards}>
          Get cashback in Climate Savers
        </a>
        <a className="result-link-leaf" href="#directory">
          Compare with similar products
        </a>
      </div>
    </div>
  )
}

function UnscannedResult({ query }: { query: string }) {
  return (
    <div className="result result-unscanned" role="status">
      <div className="result-star">
        <StarIcon />
      </div>
      <div className="result-main">
        <span className="pill pill-outline">Not scanned yet</span>
        <span className="result-name">Nobody has scanned “{query}” yet.</span>
        <p>
          It isn’t on the Naughty List or in Disclosed Alternatives. Scan its barcode
          in the Climate Savers app and you become <strong>The Originator</strong>,
          eligible for a share of the commission if its producer goes on to
          commission a life cycle assessment.
        </p>
      </div>
      <a className="btn btn-mint-lg" href={links.home + '/#join'}>
        Become The Originator
      </a>
    </div>
  )
}
