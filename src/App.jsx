import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Currencies from './pages/Currencies'
import Main from './pages/Main'
import Price from './pages/Price'
import Nav from './components/Nav'

function App() {
  // Use the Route component to specify each route
  return (
    <div className='App'>
      <Nav />
      <Routes>
        {/* first page (landing page) that user sees upon loading website */}
        <Route path='/' element={<Main />} />
        {/* currencies page */}
        <Route path='/currencies' element={<Currencies />} />
        {/* price page */}
        <Route path='/price/:symbol' element={<Price />} />
      </Routes>
    </div>
  )
}

export default App
