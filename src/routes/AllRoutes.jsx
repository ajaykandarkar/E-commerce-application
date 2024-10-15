import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DisplayCart } from '../pages'
import { DisplayElectronicData } from '../pages/DisplayElectronicData'
import { DisplayGwelery } from '../pages/DisplayGwelery'
import { DisplayMensCloth } from '../pages/DisplayMensCloth'
import { DisplayWomensCloth } from '../pages/DisplayWomensCloth'
import { DisplayCartUser } from '../pages/DisplayCartUser'
import { ViewDetails } from '../pages/ViewDetails'

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<DisplayCart />}></Route>
        <Route path='/electronicProduct' element={<DisplayElectronicData />}></Route>
        <Route path='/jewelery' element={<DisplayGwelery />}></Route>
        <Route path='/mensclothData' element={<DisplayMensCloth />}></Route>
        <Route path='/womensclothData' element={<DisplayWomensCloth />}></Route>
        <Route path='/cart' element={<DisplayCartUser />}></Route>
        <Route path='/viewDetails' element={<ViewDetails/>}></Route>
      </Routes>
    </>
  )
}
