import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pe-5">
  <div className="container-fluid">
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link p-4">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link p-4">Dashboard</Link>
        </li>
        <li className="nav-item">
        <Link to="#services" className="nav-link p-4">Services</Link>
        </li>
        <li className="nav-item">
        <Link to="#reviews" className="nav-link p-4">Reviews</Link>
        </li>
        <li className="nav-item">
        <Link to="#blog" className="nav-link p-4">Blog</Link>
        </li>
        <li className="nav-item">
        <Link to="#contact" className="nav-link p-4">Contact Us</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
    );
};

export default NavBar;