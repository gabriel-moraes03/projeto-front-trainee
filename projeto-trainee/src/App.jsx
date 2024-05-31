import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registro from './pages/Registro'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/registro' element={<Registro />}/>
      </Routes>
    </Router>
  )
}

export default App
