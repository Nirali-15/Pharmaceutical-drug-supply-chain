import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; // Keep using external CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img 
            src="/images/pharmatrust_logo.jpg" 
            alt="PharmaTrust Logo" 
            className="logo"
          />
          <span className="logo-text">PharmaTrust</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
