import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Layout from './routes/Layout'
import Home from './routes/Home'
import ServicesPage from './routes/ServicesPage'
import PackagesPage from './routes/PackagesPage'
import FleetPage from './routes/FleetPage'
import AboutPage from './routes/AboutPage'
import ContactPage from './routes/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'packages', element: <PackagesPage /> },
      { path: 'fleet', element: <FleetPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
], {
  basename: '/TorqueCare/' // Same as your repo name
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
