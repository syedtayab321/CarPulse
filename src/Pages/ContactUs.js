import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/contactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us-page">
            <div className="container py-5">
                <h2 className="text-center mb-4">Get in Touch</h2>
                <p className="text-center mb-5">We'd love to hear from you! Feel free to reach out with any questions or comments.</p>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="contact-info p-4 shadow">
                            <h4 className="mb-3">Contact Information</h4>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Street, City, Country</p>
                            <p><FontAwesomeIcon icon={faPhone} /> +123 456 7890</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> info@carserviceprovider.com</p>

                            <div className="social-icons mt-3">
                                <a href="https://facebook.com" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="https://twitter.com" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="https://instagram.com" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="https://linkedin.com" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact-form p-4 shadow">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="4" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark w-100">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
