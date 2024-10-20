import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from "../pages/Home"
import Auth from "../pages/Auth"
function RouterConfig() {
  return (
   <Routes>
    <Route path='/' element={<Auth/>}/>
    <Route  path='/home'  element={<Home/>}  />
   </Routes>
  )
}

export default RouterConfig