import React from 'react';
import './SiderBar.css'

function SideBar({ isOpen, toggleSideBar}) {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <p>sidebaraberta</p>
      </div>
    )
}

export default SideBar;