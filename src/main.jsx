import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Routers'
import AuthProvider from './provider/AuthProvider'




ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl	mx-auto'>

    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </div>

)
