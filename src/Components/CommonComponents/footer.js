import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/footer.css';

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
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/warranty-policy">Warranty Policy</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
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
