import React from 'react'
import logoBranca from '../assets/logo-branca.png'
import InputRegistro from '../components/InputRegistro'
import { Link } from 'react-router-dom';

function Registro() {
  return (
    <div className='registro'>
        <div className="divPurple-registro">
            <img src={logoBranca} alt="logo-emakers-branca" />
            <h2 className="hero-registro">Venha fazer parte da maior rede social também!</h2>
        </div>

        <div className='divWhite-registro'>
          <h1>Registrar</h1>
          <InputRegistro/>

          <p>Já poossui uma conta?</p>
          <p>Clique no botão abaixo para fazer login!</p>

          <Link to="/login" className='buttonLogin1'>Login</Link>
        </div>
    </div>
  )
}

export default Registro