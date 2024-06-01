import React from 'react'
import logoBranca2 from '../assets/logo-branca-horizontal.png'
import iconeEditar from '../assets/icone-editar.png'
import iconePesquisa from '../assets/icone-pesquisa.png'
import iconeAmigos from '../assets/icone2.png'
import iconeMenu from '../assets/icone-menu-lateral.png'

const UserPage = ({user}) => {
  return (
    <div className='userPage'>
        <header className='header-up'>
            <div className='header-top'>
                <img src={logoBranca2} alt="logo emakers branca" />

                <nav className="header-nav">
                    <button><img src={iconePesquisa} alt="icone que representa pesquisa" /></button>
                    <button><img src={iconeAmigos} alt="icone que representa amigos" /></button>
                    <button><img src={user.profilePicture} alt="foto de perfil do usuário" /></button>
                    <button><img src={iconeMenu} alt="icone para menu lateral" /></button>
                </nav>

                <button className="editar-capa"><img src={iconeEditar} alt="icone editar capa" /></button>
                
            </div>
        </header>

        <section className='informacoes-perfil'>
            <div className="botao-foto">
                <img src={user.profilePicture} alt="foto de perfil do usuario" className="foto-perfil" />
                <button><img src={iconeEditar} alt="icone que representa edição" /></button>
            </div>
            
            <div className="infos-user">
                <h1>{user.nome}, {user.idade}</h1>
                <p>{user.bio}</p>
            </div>
            <h1></h1>
        </section>

        <div className="feed">
            {user.feedPictures.map((foto, index) => (
                <img key={index} src={foto} className='foto-feed' />
            ))}
        </div>
    </div>
  )
}

export default UserPage