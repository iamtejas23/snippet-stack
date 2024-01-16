// src/components/MenuBar.js
import React, { useState } from 'react';
import { FaSearch, FaPlus, FaUser, FaBars, FaTimes, FaInbox, FaCode, FaEllipsisH, FaHome } from 'react-icons/fa';
import './menu.css';
import {Link} from 'react-router-dom';

const MenuBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className={`menubar ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">ACME</div>
        <div className={`menu-icon`} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
          <div className="add-snippet">
            <button>
              <FaPlus /> Add Snippet
            </button>
          </div>
          <div className="user-profile">
            <FaUser />
            <span>user</span>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="hide-button" onClick={toggleSidebar}>
          Lebels
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-item">
            <FaHome />
            <span><Link className='side-pro' to='/'>Home</Link></span>
          </div>
          <div className="sidebar-item">
            <FaInbox />
            <span><Link className='side-pro' to='/Inbox'>Inbox</Link></span>
          </div>
          <div className="sidebar-item">
            <FaCode />
            <span><Link className='side-pro' to='/Snippets'>Snippets</Link></span>
          </div>
          <div className="sidebar-item">
            <FaEllipsisH />
            <span>More</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MenuBar;
