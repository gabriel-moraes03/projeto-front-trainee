import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Registro from './pages/Registro'
import UserPage from './pages/UserPage'
import fotoPerfil from './assets/foto-perfil.jpg'
import fotoFeed1 from './assets/foto-feed-1.jpg'
import fotoFeed2 from './assets/foto-feed-2.jpg'
import './App.css'

function App() {
  const [user, setUser] = useState(
    {
      nome: "Caio Henrique Noronha",
      idade: "19",
      bio: "Exemplo de bio; Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta debitis incidunt assumenda tempora ut explicabo error, est libero fugit.",
      profilePicture: fotoPerfil,
      feedPictures: [fotoPerfil,fotoFeed1,fotoFeed2]
    }
  )
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/registro' element={<Registro />}/>
        <Route path='/user-page' element={<UserPage user={user} setUser={setUser} />}/>
      </Routes>
    </Router>
  )
}

export default App
