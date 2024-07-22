import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SidebarProvider } from './context/Sidebar_Context.jsx'
import { ProductProvider } from './context/Product_Context.jsx'
import { FilterProvider } from './context/filter_Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <ProductProvider>
      <FilterProvider> 
    <App />
     </FilterProvider> 
    </ProductProvider>
    </SidebarProvider>

)
