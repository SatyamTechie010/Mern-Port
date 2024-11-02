import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './navbar.css'; 
import './utility.css';

const Navbar = () => {
  return (
    <nav aria-label="Main Navigation" className="navbar">
      <div className="navbar__left">Satyam's Portfolio</div>
      <div className="navbar__right">
        <ul className="navbar__list">
          {/* <li><Link to="/home">Home</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
