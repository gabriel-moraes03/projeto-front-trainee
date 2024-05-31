import React from 'react'

function InputLogin() {
  return (
    <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" />
    </form>
  )
}

export default InputLogin