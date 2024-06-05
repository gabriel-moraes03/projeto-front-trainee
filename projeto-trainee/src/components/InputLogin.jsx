import React from 'react'
import './InputLogin.css'

function InputLogin() {
  return (
    <form className='form-login'>
        <label htmlFor="email" className='label-login'>Email</label>
        <input type="email" id="email" className='input-login'/>

        <label htmlFor="senha" className='label-login'>Senha</label>
        <input type="password" id="senha" className='input-login'/>
    </form>
  )
}

export default InputLogin