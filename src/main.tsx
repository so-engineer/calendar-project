import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import "./styles/output.css"
import "./styles/destyle.css"
import { ToPage } from './components/pages/ToPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToPage />
  </StrictMode>,
)
