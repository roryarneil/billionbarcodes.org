import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import '../landing.css'
import '../subsites.css'
import { DisclosedAlternativesPage } from '../pages/DisclosedAlternativesPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DisclosedAlternativesPage />
  </StrictMode>,
)
