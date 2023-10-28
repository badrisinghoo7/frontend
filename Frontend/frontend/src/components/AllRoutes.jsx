import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Signup from "./Signup";
import Login from "./Login"
import About from './About'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Signup />}></Route>
    </Routes>
  )
}

export default AllRoutes