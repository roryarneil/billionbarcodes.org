# billionbarcodes.org

Vite + React + TypeScript, deployed on Vercel. One build serves three sites:

| Site | Source | Built to |
| --- | --- | --- |
| billionbarcodes.org | `index.html`, `src/App.tsx` | `dist/index.html` |
| naughtylist.billionbarcodes.org | `naughty-list/index.html`, `src/pages/NaughtyListPage.tsx` | `dist/naughty-list/` |
| disclosed-alternatives.billionbarcodes.org | `disclosed-alternatives/index.html`, `src/pages/DisclosedAlternativesPage.tsx` | `dist/disclosed-alternatives/` |

`vercel.json` routes each subdomain to its page by host name. Add both subdomains to
this Vercel project (Settings → Domains) and point their DNS at Vercel.

```bash
npm install
npm run dev     # http://localhost:5173, /naughty-list/ and /disclosed-alternatives/
npm run build   # typecheck + production build
```

## Notes

- Product search uses sample data in `src/data/products.ts`. Replace `findProduct` with the live GS1 / Climate Savers lookup.
- Placeholders to set: `[LIVE COUNT]`, `[N]` scans to list, `[7]` day GS1 check, `[2]` business days for "update pending", `[300]` word right of reply, `[5]` day complaint response.
- Earthmark brand ratings are UK-only; they are not shown on these pages.
- Coco Gothic Bold (`public/fonts`) is used under Climate Fintech Limited's licence.
