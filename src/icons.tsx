type IconProps = {
  size?: number
  className?: string
}

export function BarcodeMark({ size = 40 }: IconProps) {
  const height = (size * 34) / 40
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 40 34"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <rect x="0" y="0" width="3" height="34" />
        <rect x="5" y="0" width="1.5" height="34" />
        <rect x="9" y="0" width="4" height="34" />
        <rect x="15" y="0" width="1.5" height="34" />
        <rect x="19" y="0" width="2.5" height="34" />
        <rect x="24" y="0" width="1.5" height="34" />
        <rect x="28" y="0" width="4" height="34" />
        <rect x="34" y="0" width="1.5" height="34" />
        <rect x="37.5" y="0" width="2.5" height="34" />
      </g>
    </svg>
  )
}

export function ScanBarcodeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M3 7V4h3M18 4h3v3M21 17v3h-3M6 20H3v-3M7 8v8M10 8v8M13 8v8M17 8v8" />
    </svg>
  )
}

export function LeafStrokeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14zM5 19l6-6" />
    </svg>
  )
}

export function BasketIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 4h2l2.5 11h11L21 7H6.5M9 20a1 1 0 100-2 1 1 0 000 2zM18 20a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  )
}

export function ChartIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
    </svg>
  )
}

export function StarIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z" />
    </svg>
  )
}

export function ProductBarcode() {
  return (
    <svg width="150" height="70" viewBox="0 0 150 70" aria-hidden="true">
      <g fill="#ffffff">
        <rect x="0" y="0" width="4" height="70" />
        <rect x="8" y="0" width="2" height="70" />
        <rect x="14" y="0" width="6" height="70" />
        <rect x="24" y="0" width="2" height="70" />
        <rect x="30" y="0" width="3" height="70" />
        <rect x="37" y="0" width="6" height="70" />
        <rect x="47" y="0" width="2" height="70" />
        <rect x="53" y="0" width="4" height="70" />
        <rect x="61" y="0" width="2" height="70" />
        <rect x="67" y="0" width="6" height="70" />
        <rect x="77" y="0" width="3" height="70" />
        <rect x="84" y="0" width="2" height="70" />
        <rect x="90" y="0" width="5" height="70" />
        <rect x="99" y="0" width="2" height="70" />
        <rect x="105" y="0" width="6" height="70" />
        <rect x="115" y="0" width="3" height="70" />
        <rect x="122" y="0" width="2" height="70" />
        <rect x="128" y="0" width="5" height="70" />
        <rect x="137" y="0" width="2" height="70" />
        <rect x="143" y="0" width="7" height="70" />
      </g>
    </svg>
  )
}

export function LeafRating({
  filled = 4,
  total = 5,
  size = 18,
  fill = '#1f9d78',
  empty = '#8aa7a0',
  label,
}: {
  filled?: number
  total?: number
  size?: number
  fill?: string
  empty?: string
  label: string
}) {
  return (
    <div className="leaf-rating" role="img" aria-label={label}>
      {Array.from({ length: total }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          {i < filled ? (
            <path d="M4 20c0-9 7-16 16-16 0 9-7 16-16 16z" fill={fill} />
          ) : (
            <path
              d="M4 20c0-9 7-16 16-16 0 9-7 16-16 16z"
              fill="none"
              stroke={empty}
              strokeWidth="1.8"
            />
          )}
        </svg>
      ))}
    </div>
  )
}

export function SearchIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  )
}

export function AlertIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6M12 16.5v.5" />
    </svg>
  )
}

export function CheckIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.7 2.7L16.5 9" />
    </svg>
  )
}

export type Level = 'newb' | 'rookie' | 'guardian' | 'legend'

const INK = '#0b2420'

// Originator status avatars: Newb (1+), Rookie (10+), Guardian (50+), Legend (250+)
export function LevelAvatar({ level, size = 72 }: { level: Level; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="38" r="17" fill="#fff" stroke={INK} strokeWidth="3" />
      {level === 'newb' && (
        <>
          <path d="M32 21c-1-5 3-8 6-6.5c2.5 1.3 1.5 4.5-1 4" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          <circle cx="21.5" cy="45" r="2.8" fill="#ffb3b3" />
          <circle cx="42.5" cy="45" r="2.8" fill="#ffb3b3" />
          <circle cx="32" cy="47.5" r="2" fill="none" stroke={INK} strokeWidth="2" />
        </>
      )}
      {level === 'rookie' && (
        <path
          d="M15 36C12 24 18 14 25 9c0 5 3 8 6 3c2 5 5 5 8-1c6 5 11 14 9 25c-5-7-11-9-16-9s-12 2-17 9z"
          fill="#2ee6c0"
          stroke={INK}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      )}
      {level === 'guardian' && (
        <>
          <path d="M14 33C14 19 50 19 50 33z" fill="#1f6b5a" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="10" y="31" width="44" height="6" rx="3" fill="#1f6b5a" stroke={INK} strokeWidth="2.5" />
          <path d="M32 20l6 2.5v4.5c0 3.5-3 5.5-6 6.5c-3-1-6-3-6-6.5v-4.5z" fill="#58ffce" stroke={INK} strokeWidth="2" />
        </>
      )}
      {level === 'legend' && (
        <>
          <path d="M17 28C8 25 6 14 9 7c2 9 7 13 13 15z" fill="#fff4d6" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M47 28C56 25 58 14 55 7c-2 9-7 13-13 15z" fill="#fff4d6" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M15 34C15 19 49 19 49 34z" fill="#8fa7a1" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="13" y="30" width="38" height="6" rx="2" fill="#5f7a75" stroke={INK} strokeWidth="2.5" />
          {[20, 28, 36, 44].map((x) => (
            <circle key={x} cx={x} cy="33" r="1.2" fill="#fff" />
          ))}
        </>
      )}
      <circle cx="26" cy="40" r="2.3" fill={INK} />
      <circle cx="38" cy="40" r="2.3" fill={INK} />
    </svg>
  )
}
