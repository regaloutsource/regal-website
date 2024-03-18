import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const LayoutPage = React.lazy(() => import("../presentation/pages/LayoutPage"))
const Home = React.lazy(() => import("../presentation/pages/Home"))
const About = React.lazy(() => import("../presentation/pages/About"))

function AppRoutes() {
    // initialize a browser router
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Suspense fallback=""><LayoutPage Children={<Home />} /></Suspense>,
      },
      {
        path: "/about",
        element: <Suspense fallback=""><LayoutPage Children={<About />} /></Suspense>,
      },
    ])
  
    return (
        <RouterProvider router={router} />
    )
  }

export default AppRoutes