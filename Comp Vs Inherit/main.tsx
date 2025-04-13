import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ButtonCom } from './Inheritence/ButtonCom';
import CartButton from './Inheritence/CartButton';
import SendButton from './Inheritence/SendButton';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ButtonCom/>
      <CartButton/>
      <SendButton></SendButton>
  </StrictMode>,
)
