import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Newblog from './components/Newblog.jsx'
import Blogs from './components/Blogs'
import OpenBlog from './components/OpenBlog'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<><Home/></>}/>
      <Route path='/newblog' element= {<Newblog/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blog/:id' element={<OpenBlog/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
