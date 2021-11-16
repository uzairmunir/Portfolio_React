import React, { useContext, useState } from 'react';
import { Person, Mail, Brightness3 } from '@mui/icons-material';
import './navbar.scss';
import ThemeToggle from '../dark-theme/ThemeToggle';
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const { dark } = useContext(ThemeContext);
  return (
    <>
      <div
        className={
          dark ? 'navbar dark-nav' : `navbar ${menuOpen ? 'active' : ''}`
        }
      >
        <div className='wrapper'>
          <div className='left'>
            <a href='#intro' className='logo'>
              Uzair.
            </a>
            <div className='item-container'>
              <Person className='icon' />
              <span>+92 03026600578</span>
            </div>
            <div className='item-container'>
              <Mail className='icon' />
              <span>uzair8825@gmail.com</span>
            </div>
          </div>
          <div className='right'>
            <div className='theme-toggle'>
              <ThemeToggle />
            </div>
            <div className='menu-bar' onClick={onToggle}>
              <span className='lin1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>
      </div>
      <div className={`menu ${menuOpen ? 'menu-active' : ''}`}>
        <ul>
          <li>
            <a href='#home' onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href='#intro' onClick={closeMenu}>
              Intro
            </a>
          </li>
          <li>
            <a href='#portfolio' onClick={closeMenu}>
              Portfolio
            </a>
          </li>
          <li>
            <a href='#testimonials' onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li>
            <a href='#contact' onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
