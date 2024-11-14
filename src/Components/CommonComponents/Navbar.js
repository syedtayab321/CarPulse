import React, { useState } from 'react';
import logo from '../../assets/images/carpulseLogo.jpeg';
import '../../assets/css/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { Modal, Button } from 'react-bootstrap';
const Navbar = () => {
  const navigate = useNavigate();
  const userData = localStorage.getItem('user');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = (value) => {
    if (value === 'login') {
      navigate('/login');
    } else if (value === 'signup') {
      navigate('/signup');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      setShowLogoutConfirm(false); // Close the modal
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

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
              <Link className="nav-link" to="/major-services">Major Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/battries">Batteries Section</Link>
            </li>
            {userData === null ? (
              <>
                <li className="btn">
                  <button className="btn btn-success" onClick={() => handleClick('login')}>Login</button>
                </li>
                <li className="btn">
                  <button className="btn btn-primary" onClick={() => handleClick('signup')}>Create Account</button>
                </li>
              </>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-primary"
                  onClick={toggleDropdown}
                  aria-expanded="false"
                >
                  <i className="fas fa-user-circle"></i> {userData}
                </button>
                {showDropdown && (
                  <div className="dropdown-menu show" style={{ position: 'absolute', right: 0 }}>
                    <button className="dropdown-item" onClick={() => setShowLogoutConfirm(true)}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      <Modal show={showLogoutConfirm} onHide={() => setShowLogoutConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutConfirm(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Navbar;
