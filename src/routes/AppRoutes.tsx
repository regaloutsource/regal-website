import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { pageRoutes } from './pageRoute'


const LayoutPage = React.lazy(() => import("../presentation/pages/LayoutPage"))
const Home = React.lazy(() => import("../presentation/pages/Home"))
const About = React.lazy(() => import("../presentation/pages/About"))
const Contact = React.lazy(() => import("../presentation/pages/Contact"))
const Gallery = React.lazy(() => import("../presentation/pages/Gallery"))

function AppRoutes() {
    // initialize a browser router
    const router = createBrowserRouter([
      {
        path: pageRoutes.HOME,
        element: <Suspense fallback=""><LayoutPage Children={<Home />} /></Suspense>,
      },
      {
        path: pageRoutes.ABOUT,
        element: <Suspense fallback=""><LayoutPage Children={<About />} /></Suspense>,
      },
      {
        path: pageRoutes.CONTACT,
        element: <Suspense fallback=""><LayoutPage Children={<Contact />} /></Suspense>,
      },
      {
        path: pageRoutes.GALLERY,
        element: <Suspense fallback=""><LayoutPage Children={<Gallery />} /></Suspense>,
      },
    ])
  
    return (
        <RouterProvider router={router} />
    )
  }

export default AppRoutes