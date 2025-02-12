import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; // Import styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">PharmaTrust</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/support">Support</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
