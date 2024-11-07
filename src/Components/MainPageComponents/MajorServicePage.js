import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOilCan, faCarSide, faWater, faTools } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/majorServices.css';
import images1 from './../../assets/images/card1.jpg';
import images2 from './../../assets/images/card2.jpg';
import images3 from './../../assets/images/card3.jpg';

const carServicesData = [
    {
        icon: faOilCan,
        title: 'Oil Change',
        description: 'Quick and affordable oil changes to keep your engine running smoothly.',
        image: images1,
        link: '/carServiceDetails'
    },
    {
        icon: faCarSide,
        title: 'Tire Services',
        description: 'Professional tire rotation, alignment, and replacement services.',
        image: images2,
        link: '/carServiceDetails'
    },
    {
        icon: faWater,
        title: 'Car Wash & Detailing',
        description: 'Complete wash and detailing services to keep your car looking new.',
        image: images3,
        link: '/carServiceDetails'
    },
    {
        icon: faTools,
        title: 'Engine Diagnostics',
        description: 'Comprehensive diagnostics to identify and fix any engine issues.',
        image: images1,
        link: '/engine-diagnostics'
    },
    {
        icon: faWater,
        title: 'Car Wash & Detailing',
        description: 'Complete wash and detailing services to keep your car looking new.',
        image: images3,
        link: '/car-wash'
    },
    {
        icon: faTools,
        title: 'Engine Diagnostics',
        description: 'Comprehensive diagnostics to identify and fix any engine issues.',
        image: images1,
        link: '/engine-diagnostics'
    }
];

const CarServices = () => {
    return (
        <div className="services-section container py-5">
            <h2 className="text-center mb-5">Our Car Services</h2>
            <div className="row">
                {carServicesData.map((service, index) => (
                    <div key={index} className="col-md-4 col-lg-4 mb-4">
                        <Link to={service.link} style={{ textDecoration: 'none' }}>  {/* Wrap the card with Link */}
                            <div className="service-card shadow-sm">
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} className="img-fluid rounded" />
                                </div>
                                <div className="service-content">
                                    <FontAwesomeIcon icon={service.icon} className="service-icon" />
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarServices;
