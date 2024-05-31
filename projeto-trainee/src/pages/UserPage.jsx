import React from 'react'
import logoBranca2 from '../assets/logo-branca-horizontal.png'

const UserPage = ({user}) => {
  return (
    <div className='userPage'>
        <header className='header-up'>
            <nav className='nav-header-up'>
                <img src={logoBranca2} alt="logo emakers branca" />
            </nav>
        </header>

        <section className='informacoes-perfil'>
            <img src={user.profilePicture} alt="foto de perfil do usuario" className="foto-perfil" />
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