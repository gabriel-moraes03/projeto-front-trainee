import React from 'react'
import { Link } from 'react-router-dom';
import './LoginRedirect.css'

function LoginRedirect() {
  return (
    <>
        <Link to="/login" className='link-login'>Já possui uma conta? Clique aqui para fazer login!</Link>
    </>
  )
}

export default LoginRedirect