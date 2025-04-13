import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import ClickCounter from './General/ClickCounter'
//import HoverCounter from './General/HoverCounter'

import HoverCounter from './HOC/HoverCounter';
import ClickCounter from './HOC/ClickCounter';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <div className='flex min-h-screen flex-col justify-center items-center gap-3'>
        <div className='m-3 p-3 bg-gray-200 rounded-2xl  dark:hover:bg-amber-400'>
          <HoverCounter></HoverCounter>
        </div>
      <div className='m-3 p-3'>
        <ClickCounter></ClickCounter>
      </div>
    </div>
      
  </StrictMode>,
)
