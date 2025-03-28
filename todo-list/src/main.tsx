import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListComponent from './ListComponent'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListComponent>

    </ListComponent>
  </StrictMode>,
)
