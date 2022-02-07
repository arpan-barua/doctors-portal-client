import React, { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { UserContext } from '../../../App';

const NavBar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSignOut = () =>{
    const signedOutUser = {
      isSignedIn: false,
      name: '',
      email: '',
      success: false
    }
    setLoggedInUser(signedOutUser);
  }

    return (
        <nav style={{backgroundColor:'#464F62'}} className="navbar navbar-expand-md navbar-dark fixed-top pe-5">
  <div className="container-fluid">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/home" className="nav-link ps-4">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link ps-4">Dashboard</Link>
        </li>
        <li className="nav-item">
        <Link to="#services" className="nav-link ps-4">Services</Link>
        </li>
        <li className="nav-item">
        <Link to="#reviews" className="nav-link ps-4">Reviews</Link>
        </li>
        <li className="nav-item">
        <Link to="#contact" className="nav-link ps-4">Contact Us</Link>
        </li>
        <li className="nav-item">
        {
        loggedInUser.isSignedIn ? <Link to="/login" onClick={handleSignOut} className="nav-link p-4">Logout</Link>
         : 
        <Link to="/login" className="nav-link ps-4">Login</Link>
         }
        </li>
        </ul>
    </div>
  </div>
</nav>
    );
};

export default NavBar;