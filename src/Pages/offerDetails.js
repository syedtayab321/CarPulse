import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOilCan, faCarSide, faWater, faTools } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/offerDetailsPage.css';

const servicesData = [
    {
        icon: faOilCan,
        title: 'Oil Change',
        description: 'Quick and affordable oil changes to keep your engine running smoothly.',
    },
    {
        icon: faCarSide,
        title: 'Tire Services',
        description: 'Professional tire rotation, alignment, and replacement services.',
    },
    {
        icon: faWater,
        title: 'Car Wash & Detailing',
        description: 'Complete wash and detailing services to keep your car looking new.',
    },
    {
        icon: faTools,
        title: 'Engine Diagnostics',
        description: 'Comprehensive diagnostics to identify and fix any engine issues.',
    },
];

const OfferDetails = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section text-center text-white">
                <div className="container py-5">
                    <h1 className="display-4">Welcome to Your Trusted Car Service Provider</h1>
                    <p className="lead">Get top-notch services to keep your car running smoothly and looking great!</p>
                    <a href="#services" className="btn btn-primary btn-lg">Explore Our Services</a>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services-section container py-5">
                <h2 className="text-center mb-5">Our Premium Services</h2>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div key={index} className="col-md-6 col-lg-3 mb-4">
                            <div className="service-card p-4 shadow-sm text-center">
                                <FontAwesomeIcon icon={service.icon} className="service-icon mb-3" />
                                <h4 className="service-title mb-3">{service.title}</h4>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section bg-light py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Why Choose Us?</h2>
                    <p>We are dedicated to providing high-quality car services at affordable prices. Our team of experts ensures that your vehicle is always in the best hands. Whether you need a quick oil change, a full detailing, or an engine check, we have you covered!</p>
                </div>
            </section>

            {/* Call to Action */}
            <section id="cta" className="cta-section text-center py-5">
                <div className="container">
                    <h3 className="mb-3">Ready to take care of your car?</h3>
                    <p>Contact us today for your next service appointment, or get in touch to learn more about our services.</p>
                    <a href="#contact" className="btn btn-dark btn-lg">Book an Appointment</a>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer-section text-white text-center py-4">
                <div className="container">
                    <p>&copy; 2024 Your Car Service Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default OfferDetails;
