import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Contact_us from './pages/Contact_us'
import Career from './pages/Career'
import About_us from './pages/About_us'
import Services from './pages/Services'
import Error from './pages/Error'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='contact_us' element={<Contact_us />} />
          <Route path='career' element={<Career />} />
          <Route path='about_us' element={<About_us />} />
          <Route path='services' element={<Services />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
  )
}

export default App
