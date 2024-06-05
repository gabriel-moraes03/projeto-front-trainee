import React from 'react'
import InputRegistro from '../components/InputRegistro'
import './Registro.css'
import LoginRedirect from '../components/LoginRedirect';

function Registro() {
  return (
    <div className='registro'>
        <div className="divPurple-registro">
            <div className="logo-emakers-branca"></div>
            <h2 className="hero-registro">Venha fazer parte da maior rede social também!</h2>
        </div>

        <div className='divWhite-registro'>
          <h1>Registrar</h1>
          <InputRegistro/>

          <LoginRedirect/>
        </div>
    </div>
  )
}

export default Registro