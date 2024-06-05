import React from 'react'
import logoRoxa from '../assets/logo-roxa.png'
import InputLogin from '../components/InputLogin'
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <div className="container-white">
          <div className="div-logo-roxa"></div>
          <div className='divWhite-login'>
              <h1>Entre em sua conta</h1>
              <InputLogin/>
              <Link to="/user-page" className='buttonEntrar'>Entrar</Link>
          </div>          
        </div>


        <div className="divPurple-login">
            <h1>Novo Aqui?</h1>
            <h2>Registre-se e venha fazer parte da maior rede social!</h2>
            <Link to="/registro" className='buttonRegistrar1'>Registrar-se</Link>
            
        </div>
    </div>

  )
}

export default Login