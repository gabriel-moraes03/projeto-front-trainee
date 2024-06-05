import React from 'react'
import './InputRegistro.css'

function InputRegistro() {
  return (
    <form className='form-registro'>
        <label htmlFor="nome" className='label-registro'>Nome</label>
        <input type="text" id="nome" className='input-registro'/>

        <label htmlFor="email" className='label-registro'>Email</label>
        <input type="email" id="email" className='input-registro'/>

        <label htmlFor="senha" className='label-registro'>Senha</label>
        <input type="password" id="senha" className='input-registro'/>
        
        <label htmlFor="confirmar-senha" className='label-registro'>Confirmar Senha</label>
        <input type="password" id="confirmar-senha" className='input-registro'/>

        <label htmlFor="sexo" className='label-registro'>Sexo</label>
        <select id="sexo">
            <option value=""></option>
            <option value="masc">Masculino</option>
            <option value="fem">Feminino</option>
        </select>

        <label htmlFor="imagem" className='label-registro'>Imagem</label>
        <input type="button" id='imagem' value="Escolha sua imagem" className='input-registro'/>

        <button className='botao-registrar'>Registrar-se</button>

    </form>
  )
}

export default InputRegistro