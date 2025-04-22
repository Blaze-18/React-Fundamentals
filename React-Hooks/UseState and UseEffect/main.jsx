import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

import MyComponent from './Components/MyComponent'

function App() {
  const [show, setShow] = useState(true);

  return (
    <StrictMode>
      {show && <MyComponent />}


      <div style={{marginTop:'10px'}}>
        <button onClick={()=>{show ? setShow(false) : setShow(true)}}>Hide</button>
      </div>
      
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
