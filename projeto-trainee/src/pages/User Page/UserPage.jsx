import React, { useState } from 'react';
import logoBranca2 from '../../assets/logo-branca-horizontal.png'
import iconeEditar from '../../assets/icone-editar.png'
import iconePesquisa from '../../assets/icone-pesquisa.png'
import iconeAmigos from '../../assets/icone2.png'
import iconeMenu from '../../assets/icone-menu-lateral.png'
import Sidebar from '../../components/Sidebar/SideBar';
import './UserPage.css'



const UserPage = ({user}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className='userPage'>
            <header className='header'>
                <div className='header-topo'>
                    <img src={logoBranca2} alt="logo emakers branca" className='logo-branca-2' />

                    <button onClick={toggleSidebar} className='sidebar-open'><img src={iconeMenu}/></button>
                    <nav className="header-nav">
                        <button><img src={iconePesquisa} alt="icone que representa pesquisa" /></button>
                        <button><img src={iconeAmigos} alt="icone que representa amigos" /></button>
                        <button><img src={user.profilePicture} alt="foto de perfil do usuário" /></button>
                    </nav>

                    <button className="editar-capa"><img src={iconeEditar} alt="icone editar capa" /></button>
                    
                </div>

                <div className='informacoes-perfil'>
                    <div className="botao-foto">
                        <img src={user.profilePicture} alt="foto de perfil do usuario" className="foto-perfil" />
                        <button><img src={iconeEditar} alt="icone que representa edição" /></button>
                    </div>
                    
                    <div className="infos-user">
                        <h1>{user.nome}, {user.idade}</h1>
                        <p>{user.bio}</p>
                    </div>
                    <h1></h1>
                </div>
            </header>

            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="feed">
                {user.feedPictures.map((foto, index) => (
                    <img key={index} src={foto} className='foto-feed' />
                ))}
            </div>
        </div>
    )
}

export default UserPage