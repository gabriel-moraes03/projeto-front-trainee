import React, { useState } from 'react';
import {FaSignOutAlt, FaUserFriends, FaSearch, FaBars, FaPencilAlt} from 'react-icons/fa';
import logoBranca2 from '../../assets/logo-branca-horizontal.png'
import Sidebar from '../../components/Sidebar/SideBar';
import './UserPage.css'
import { Link } from 'react-router-dom';



const UserPage = ({user}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className='userPage'>
            <header className='header'>
                <div className='header-topo'>
                    <div className='logo-branca-2'> </div> 

                    <button onClick={toggleSidebar} className='sidebar-botao'><FaBars style={{ width: '50px', height: '50px', color:'white' }}/></button>
                    <nav className="header-nav">
                        <button><FaSearch style={{ width: '27px', height: '27px'}}/></button>
                        <button><FaUserFriends style={{ width: '27px', height: '27px'}}/></button>
                        <button className='botao-foto'></button>
                        <Link to="/login" className='botao-logout'><FaSignOutAlt style={{ width: '27px', height: '27px', transform: 'translateY(5px)'}}/></Link>
                    </nav>

                   
                    
                </div>
                
                <button className="editar-capa"><FaPencilAlt style={{ width: '25px', height: '25px'}}/></button>
                
                <div className='informacoes-perfil'>
                    <div className="perfil">
                        <img src={user.profilePicture} alt="foto de perfil do usuario" className="foto-perfil" />
                        <button className='editar-foto'><FaPencilAlt style={{ width: '21px', height: '21px'}}/></button>
                    </div>
                    
                    <div className="infos-user">
                        <h1>{user.nome}, {user.idade}</h1>
                        <p>{user.bio}</p>
                    </div>
                </div>

                <div className='borda-inferior'></div>

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