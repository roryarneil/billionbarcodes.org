import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import '../landing.css'
import '../subsites.css'
import { OriginatorPage } from '../pages/OriginatorPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OriginatorPage />
  </StrictMode>,
)
