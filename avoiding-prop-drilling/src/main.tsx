import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App'
import ThemeProvider from './Provider/ThemeProvider'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
        <App/>
    </ThemeProvider>
    
  </StrictMode>,
)
