import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductState from './context/ProductContext.jsx'
import './index.css'
import FilterContextProvider from './context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductState>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </ProductState>
  </React.StrictMode>,
)
