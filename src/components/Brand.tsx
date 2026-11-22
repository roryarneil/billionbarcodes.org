import { BarcodeMark } from '../icons'

type BrandProps = {
  href: string
  label?: string
}

// Billion Barcodes lockup: barcode mark, wordmark, then "by" + Climate Savers logo.
export function Brand({ href, label = 'Billion Barcodes by Climate Savers – home' }: BrandProps) {
  return (
    <a href={href} className="brand" aria-label={label}>
      <BarcodeMark />
      <span className="brand-text">
        <span className="brand-name">Billion Barcodes</span>
        <span className="brand-by">
          <span>by</span>
          <img className="brand-mark" src="/climatesavers-wordmark.png" alt="" />
        </span>
      </span>
    </a>
  )
}
