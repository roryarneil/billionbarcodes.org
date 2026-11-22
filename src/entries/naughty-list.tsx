import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import '../landing.css'
import '../subsites.css'
import { NaughtyListPage } from '../pages/NaughtyListPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NaughtyListPage />
  </StrictMode>,
)
