import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Kids from '../pages/kids'
import Men from '../pages/men'
import Women from '../pages/women'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='kids' element={<Kids />} />
      <Route path='men' element={<Men />} />
      <Route path='women' element={<Women />} />
    </Routes>
  )
}

export default Routers