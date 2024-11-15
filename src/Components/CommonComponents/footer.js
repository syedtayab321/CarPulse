import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container py-4">
                <div className="row text-center text-md-start">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>123 Main Street, Anytown, USA</p>
                        <p>Email: info@carservice.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/warranty">Warranty Policy</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <Link to="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                            <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center py-2">
                <p>&copy; {new Date().getFullYear()} Car Service Provider. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
