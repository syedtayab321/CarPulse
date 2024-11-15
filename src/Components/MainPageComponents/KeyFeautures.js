import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faClock, faDollarSign, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/keyfeatures.css';

const keyFeaturesData = [
    {
        icon: faShieldAlt,
        title: 'Reliable & Trusted',
        description: 'We are a trusted service provider with years of experience and positive customer feedback.',
    },
    {
        icon: faClock,
        title: 'Quick Service',
        description: 'Our team ensures your car is serviced quickly without compromising quality.',
    },
    {
        icon: faDollarSign,
        title: 'Affordable Prices',
        description: 'We offer competitive pricing without hidden fees for all services.',
    },
    {
        icon: faThumbsUp,
        title: 'Customer Satisfaction',
        description: 'We prioritize customer satisfaction and ensure top-notch service.',
    },
];

const KeyFeatures = () => {
    return (
        <div className="key-features-section container py-5">
            <h2 className="text-center mb-5">Why Choose Us</h2>
            <div className="row">
                {keyFeaturesData.map((feature, index) => (
                    <div key={index} className="col-md-6 col-lg-3 mb-4">
                        <div className="feature-card text-center p-4 shadow-sm">
                            <FontAwesomeIcon icon={feature.icon} className="feature-icon mb-3" />
                            <h4 className="feature-title">{feature.title}</h4>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyFeatures;
