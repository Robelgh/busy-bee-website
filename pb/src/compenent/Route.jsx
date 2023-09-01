import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home} from "./home"
import {Calendars} from './Calendar'

export const RouteHolder = () => {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/calander" element={<Calendars />} />
       </Routes>   
    </>
  )
}
