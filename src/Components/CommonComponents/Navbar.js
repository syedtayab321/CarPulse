import React from 'react';
import logo from './../../assets/images/card1.jpg';
import { Link } from 'react-router-dom';
import './../../assets/css/navbar.css';

const Navbar = () => {
    return (
        <div className='main'>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="Logo" className="rounded-circle logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link to='/login' className="btn btn-outline-dark me-2 custom-btn">Login</Link>
                            <Link to='/sign-up' className="btn btn-dark custom-btn">Create Account</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
