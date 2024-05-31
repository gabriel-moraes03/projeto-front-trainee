import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Registro from './pages/Registro'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/registro' element={<Registro />}/>
      </Routes>
    </Router>
  )
}

export default App
