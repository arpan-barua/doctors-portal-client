import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pe-5">
  <div className="container-fluid">
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link p-4" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-4" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-4" href="#">Dental Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-4 text-white" href="#">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-4 text-white" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link p-4 text-white" href="#">Contact Us</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
    );
};

export default NavBar;