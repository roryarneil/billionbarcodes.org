// Sample data for the design. Replace with the live GS1 / Climate Savers lookup.
export type NaughtyProduct = {
  status: 'naughty'
  gtin: string
  name: string
  category: Category
  scans: number
  checked: string
  originator: string
}

export type DisclosedProduct = {
  status: 'disclosed'
  gtin: string
  name: string
  category: Category
  pcf: number
  unit: string
  boundary: string
  method: string
  verified: string
  published: string
}

export type Product = NaughtyProduct | DisclosedProduct
export type Category = 'Food & drink' | 'Household' | 'Personal care'
export const categories: Category[] = ['Food & drink', 'Household', 'Personal care']

// Operational allowance: 5 t CO2e a year, about 416 kg a month.
export const MONTHLY_ALLOWANCE_KG = 416

export const products: Product[] = [
  { status: 'naughty', gtin: '8710000000024', name: 'Brightwash Laundry Liquid 1.5 L', category: 'Household', scans: 1284, checked: '21 Nov 2026', originator: '@maya_k' },
  { status: 'naughty', gtin: '8710000000031', name: 'Crunchwell Corn Flakes 500 g', category: 'Food & drink', scans: 642, checked: '21 Nov 2026', originator: '@sam.r' },
  { status: 'naughty', gtin: '8710000000055', name: 'Velvetine Body Wash 250 ml', category: 'Personal care', scans: 311, checked: '21 Nov 2026', originator: 'Anonymous Originator' },
  { status: 'disclosed', gtin: '8710000000017', name: 'Oatfield Barista Oat Drink 1 L', category: 'Food & drink', pcf: 0.38, unit: 'per 1 L', boundary: 'Cradle to grave', method: 'ISO 14067', verified: 'Externally verified', published: '14 Oct 2026' },
  { status: 'disclosed', gtin: '8710000000062', name: 'Leafline Eco Laundry Liquid 1.5 L', category: 'Household', pcf: 0.9, unit: 'per 1.5 L', boundary: 'Cradle to grave', method: 'PEF', verified: 'Externally verified', published: '2 Sep 2026' },
  { status: 'disclosed', gtin: '8710000000079', name: 'Highmoor Cheddar 400 g', category: 'Food & drink', pcf: 2.84, unit: 'per 400 g', boundary: 'Cradle to retail', method: 'PACT v3', verified: 'Peer reviewed', published: '30 Jul 2026' },
  { status: 'disclosed', gtin: '8710000000086', name: 'Brookfield Oat Flakes 500 g', category: 'Food & drink', pcf: 0.41, unit: 'per 500 g', boundary: 'Cradle to retail', method: 'ISO 14067', verified: 'Externally verified', published: '19 Aug 2026' },
  { status: 'disclosed', gtin: '8710000000093', name: 'Harbourline Shower Gel 250 ml', category: 'Personal care', pcf: 0.52, unit: 'per 250 ml', boundary: 'Cradle to grave', method: 'ISO 14067', verified: 'Not verified', published: '5 Nov 2026' },
  { status: 'disclosed', gtin: '8710000000109', name: 'Riverside Dish Tablets x30', category: 'Household', pcf: 1.12, unit: 'per pack of 30', boundary: 'Cradle to grave', method: 'GHG Protocol Product Standard', verified: 'Externally verified', published: '11 Jun 2026' },
]

export function findProduct(query: string): Product | null {
  const q = query.trim().toLowerCase()
  if (!q) return null
  return products.find((p) => p.name.toLowerCase().includes(q) || p.gtin.includes(q)) ?? null
}

export function shareOfAllowance(pcf: number): string {
  const pct = (pcf / MONTHLY_ALLOWANCE_KG) * 100
  return `${pct < 0.1 ? pct.toFixed(2) : pct.toFixed(1)}%`
}
