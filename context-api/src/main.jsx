import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App';


const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {/* Add your application components here */}
      <App></App>
    </StrictMode>
  );
}
