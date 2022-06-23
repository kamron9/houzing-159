import React from 'react'
import Navbar from '../components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import { navbar } from '../utils/navbar'

const Root = () => {
  return (
    <div>
      <Routes>

      <Route element={<Navbar />}>
          {
            navbar.map(({ id, element, path,hidden }) => {
                return !hidden &&(
                  <Route key={id} path={path} element={element} />
                  )
            })
          }
        </Route>
        <Route path='/' element={<Navigate to={'/home'} />} />
        {/* without navbar */}
        <Route element={<Navbar/>}>
          {
            navbar.map(({ id, element, path,hidden }) => {
                return hidden &&(
                  <Route key={id} path={path} element={element} />
                  )
            })
          }
        </Route>
     
      </Routes>
    </div>
  )
}

export default Root
