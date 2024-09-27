import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import './index.css'
import Contact from './Components/Contact/Contact'
import Github, { githubinfoLoader } from './Components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element:<Home />,
//       },{
//         path:"/About",
//         element: <About />,
//       },
//       {
//         path: "/Contact",
//         element: <Contact/>
//       }
//     ]
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/contact' element= {<Contact/>}/>

      {/* ----Best optimization for faster api calling 'loader concept react router dom'----- */}

      <Route
      loader={githubinfoLoader}
       path='/github' element= {<Github/>}/>
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
