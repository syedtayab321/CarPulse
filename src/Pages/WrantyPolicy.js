import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/warrantyPolicy.css';

const WarrantyPolicy = () => {
    return (
        <div className="warranty-section container py-5">
            <h2 className="text-center mb-5">Our Warranty Policy</h2>
            <div className="warranty-content">
                <h4>What’s Covered?</h4>
                <p>We offer warranty coverage on parts and services provided, ensuring peace of mind for our customers.</p>

                <h4>Duration of Warranty</h4>
                <p>All our services come with a minimum warranty of 6 months, covering labor and parts.</p>

                <h4>How to Claim Warranty?</h4>
                <p>If you experience issues with our services, simply contact us within the warranty period, and we will assist with repairs.</p>

                <h4>Limitations & Exclusions</h4>
                <p>Warranty is void in cases of improper handling, accidents, or third-party repairs. Please review full terms.</p>
            </div>
        </div>
    );
};

export default WarrantyPolicy;
