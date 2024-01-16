import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductContextProvider from './context/ProductContext.jsx'
import './index.css'
import FilterContextProvider from './context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
)
