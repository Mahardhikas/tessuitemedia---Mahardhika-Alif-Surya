import React, { useState } from 'react';
import logo from '../assets/logo.png';

// ...

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState('Ideas');
  
    const handleMenuClick = (menu) => {
      setActiveMenu(menu);
    };
  
    return (
      <div>
            <nav className='fixed-header'>
              <div>
                <img src={logo} alt=" "/>
              </div>
              <div>
                <ul className='nav_list'>
                  <li className={`nav_item ${activeMenu === 'Work' ? 'active-link' : ''}`} onClick={() => handleMenuClick('Work')}>Work</li>
                  <li className={`nav_item ${activeMenu === 'About' ? 'active-link' : ''}`} onClick={() => handleMenuClick('About')}>About</li>
                  <li className={`nav_item ${activeMenu === 'Services' ? 'active-link' : ''}`} onClick={() => handleMenuClick('Services')}>Services</li>
                  <li className={`nav_item ${activeMenu === 'Ideas' ? 'active-link' : ''}`} onClick={() => handleMenuClick('Ideas')}>Ideas</li>
                  <li className={`nav_item ${activeMenu === 'Careers' ? 'active-link' : ''}`} onClick={() => handleMenuClick('Careers')}>Careers</li>
                  <li className={`nav_item nav_ujung ${activeMenu === 'Contact' ? 'active-link' : ''}`} onClick={() => handleMenuClick('Contact')}>Contact</li>
                </ul>
              </div>
            </nav>
          </div>
    );
  }
  
