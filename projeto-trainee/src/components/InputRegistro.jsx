import React from 'react'

function InputRegistro() {
  return (
    <form>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" />
        
        <label htmlFor="confirmar-senha">Confirmar Senha</label>
        <input type="password" id="confirmar-senha" />

        <label htmlFor="sexo">Sexo</label>
        <select id="sexo">
            <option value=""></option>
            <option value="masc">Masculino</option>
            <option value="fem">Feminino</option>
        </select>

        <label htmlFor="imagem">Imagem</label>
        <input type="button" id='imagem' value="Escolha sua imagem"/>

        <input type="submit" value="Registrar-se"/>

    </form>
  )
}

export default InputRegistro