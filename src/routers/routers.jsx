import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Kids from '../pages/Kids'
import Men from '../pages/Men'
import Women from '../pages/Women'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Kids' element={<Kids />} />
      <Route path='Men' element={<Men />} />
      <Route path='Women' element={<Women />} />
    </Routes>
  )
}

export default Routers