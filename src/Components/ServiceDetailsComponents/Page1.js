import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/servicesDetailsPage1.css';
import { FaCar } from 'react-icons/fa';

function ServiceDetailsPage1() {
  return (
    <div className="container my-5">
      <div className="top-bar py-2 text-center text-white">
        <h3>Service Details</h3>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8 p-4 shadow-sm service-box position-relative">
          <div className="most-popular-tag">Most Popular</div>
          <h2 className="text-center mb-4">MAJOR SERVICE</h2>
          <div className="row">
            {/* What's Included */}
            <div className="col-md-6">
              <h4>WHAT'S INCLUDED</h4>
              <ul className="list-unstyled">
                {[
                  "Oil Filter",
                  "Oil 5W30 (Free Promotion)",
                  "Collection & Delivery",
                  "All Fluids Top-Up",
                  "Tyre Check & Air Pressure",
                  "Reset car service Light",
                  "360-degree Health Check",
                  "Computer Diagnostics Report",
                  "AC Checkup",
                  "Brake Check",
                  "Car Wash",
                  "AC Filter Replacement (Labour)",
                  "Air Filter Replacement (Labour)",
                  "Oil Filter Replacement (Labour)",
                  "Oil Change (Labour)"
                ].map((item, index) => (
                  <li key={index} className="included-item">
                    <input type="checkbox" checked readOnly />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <h4>PARTS NOT INCLUDED</h4>
              <ul className="list-unstyled">
                {["AC Filter", "Air Filter", "Spark Plugs", "Spark Plugs Replacement (Labour)"].map(
                  (item, index) => (
                    <li key={index} className="not-included-item">
                      <input type="checkbox" readOnly />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <div className="price-section mt-4 text-center">
                <span className="original-price">499 AED</span>
                <span className="discounted-price">349 AED</span>
              </div>
            </div>
          </div>
          <div className="discount-box p-3 mt-4 position-relative">
            <h5>GET FREE OIL AND AED 150 OFF WHEN YOU BOOK TODAY</h5>
            <h2>NOW 349 AED</h2>

            {/* Countdown Timer */}
            <div className="d-flex justify-content-center my-3">
              {["DAYS", "HOURS", "MINUTES", "SECONDS"].map((unit, index) => (
                <div key={index} className="countdown-unit text-center mx-2">
                  <span className="countdown-number">00</span>
                  <span className="countdown-label">{unit}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-danger book-now-btn">
              BOOK NOW <FaCar className="car-icon animate-car" />
            </button>
          </div>
        </div>

        {/* Callback Request Button */}
        <button className="callback-request-btn">Request a Callback</button>
      </div>
    </div>
  );
}

export default ServiceDetailsPage1;
