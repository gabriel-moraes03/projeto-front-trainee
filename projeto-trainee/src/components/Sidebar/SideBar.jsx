import React from 'react';
import './SiderBar.css'
import { FaTimes, FaSignOutAlt, FaUser, FaUserFriends, FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SideBar({ isOpen, toggleSidebar}) {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button onClick={toggleSidebar} className='fechar-sidebar'><FaTimes style={{ width: '50px', height: '50px', color:'white' }}/></button>
        
        <div className="links-sidebar">
          <a href=""><FaSearch style={{marginRight:'5px'}}/>Pesquisar</a>
          <a href=""><FaUserFriends style={{marginRight:'5px'}}/>Social</a>
          <Link to="/user-page"><FaUser style={{marginRight:'5px'}}/>Meu perfil</Link>          
        </div>

        <Link to="/login" className='custom-link'><FaSignOutAlt style={{marginRight:'5px'}}/>Sair</Link>
      </div>
    )
}

export default SideBar;