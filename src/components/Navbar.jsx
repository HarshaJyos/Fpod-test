import React, { useState } from 'react';
import './Navbar.css';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => window.scrollTo(0, 0)}>
          Freshpod
        </div>

        {/* Desktop Menu */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>About Us</a>
          </li>
          <li className="nav-item">
            <a href="#make-in-india" className="nav-link" onClick={closeMobileMenu}>Make in India</a>
          </li>
          <li className="nav-item">
            <a href="#features" className="nav-link" onClick={closeMobileMenu}>Features</a>
          </li>
          <li className="nav-item">
            <a href="#procedure" className="nav-link" onClick={closeMobileMenu}>Procedure</a>
          </li>
          <li className="nav-item">
            <a href="#calculator" className="nav-link" onClick={closeMobileMenu}>Calculator</a>
          </li>
          <li className="nav-actions">
            <a href="https://wa.me/917815908571" target="_blank" rel="noreferrer" className="whatsapp-btn">
              <FaWhatsapp />
            </a>
            <a href="mailto:hello@freshpod.in" className="contact-btn">Contact</a>
          </li>
        </ul>

        {/* Mobile Actions (Visible <= 960px) */}
        <div className="mobile-actions-wrapper">
          <a href="https://wa.me/917815908571" target="_blank" rel="noreferrer" className="mobile-whatsapp-btn">
            <FaWhatsapp />
          </a>
          <div className="mobile-toggle" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
