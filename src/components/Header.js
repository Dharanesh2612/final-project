import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS for Header

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src="https://via.placeholder.com/50" alt="Quantam Tech Logo" className="logo" />
          <h1 className="logo-heading">Quantam Tech</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/signinPage" className="signin-button">Sign In</Link></li>
        </ul>
      </nav>
    </header>

  );
};

export default Header;
