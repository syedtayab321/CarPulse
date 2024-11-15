import React from 'react';
import './css/serviceContractPage1.css';
import mainImage from'./../../assets/carContractImages/Service-Contract-Image.png';
import Icon1 from'./../../assets/carContractImages/pickup-delivery.svg';
import Icon2 from'./../../assets/carContractImages/money-bag.svg';
import Icon3 from'./../../assets/carContractImages/Filled-outline.svg';
import Icon4 from'./../../assets/carContractImages/wrench-2.svg';
const ServiceContractPage = () => {
    return (
        <div className="container service-contract-page text-center">
            {/* Header Section */}
            <div className="row align-items-center py-5">
                <div className="col-md-6 text-md-left">
                    <img src={mainImage} alt="Service Contract" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2 className="text-uppercase">Tailor-Made Multi-Year Service Contracts</h2>
                    <p>Take the hassle out of car maintenance with our service contracts. Choose a contract for 1, 2, and 3 years.</p>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Your Contact Number" />
                    </div>
                    <button className="btn btn-primary btn-lg">Let's Go</button>
                    <p className="mt-3">or call us on <a href="tel:8002665464">8002665464</a></p>
                </div>
            </div>

            {/* Features Section */}
            <div className="row text-center features-section">
                <div className="col-md-3">
                    <img src={Icon1} alt="Free Pickup and Delivery" className="feature-icon" />
                    <p>Free Pickup and Delivery</p>
                </div>
                <div className="col-md-3">
                    <img src={Icon2} alt="Cheaper than Agencies" className="feature-icon" />
                    <p>Up to 50% cheaper than agencies</p>
                </div>
                <div className="col-md-3">
                    <img src={Icon3} alt="Qualified Mechanics" className="feature-icon" />
                    <p>Vetted & qualified mechanics</p>
                </div>
                <div className="col-md-3">
                    <img src={Icon4} alt="Parts & Labour Warranty" className="feature-icon" />
                    <p>1 year parts & labour warranty</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceContractPage;
