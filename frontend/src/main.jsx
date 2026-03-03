import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Toaster } from 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
})

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <BrowserRouter>  
      <QueryClientProvider client={queryClient}>    
        <App />
        {/* <Toaster position="top-center" /> */}
      </QueryClientProvider>  
    </BrowserRouter>
  </React.StrictMode>,
)
