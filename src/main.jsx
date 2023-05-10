import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Routers'




ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl	mx-auto'>
    <RouterProvider router={router}></RouterProvider>
  </div>

)
