import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AllProducts } from './Context/ContextApi.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AllProducts>
        <App />
      </AllProducts>
    </StrictMode>
  </BrowserRouter>
)
