import React from 'react';
import logo from '../../assets/images/card1.jpg';
import '../../assets/css/navbar.css';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (value) => {
    if (value === 'login'){
      navigate('/login');
    }else if (value === 'signup'){
      navigate('/signup');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="navbar-title">Car Pulse</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact us</Link>
            </li>
            <li className="btn">
              <button className="btn btn-success" onClick={()=>handleClick('login')} >Login</button>
            </li>

            <li className="btn">
              <button className="btn btn-outline-dark" onClick={()=>handleClick('signup')}>Create Account</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
