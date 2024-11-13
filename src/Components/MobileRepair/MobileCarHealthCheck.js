import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function HealthCheck() {
  return (
    <div className="health-check">
      <div className="health-check-card">
        <h3 className="health-check-title">10-POINT HEALTH CHECK</h3>
        <p className="health-check-subtitle">Complimentary with every mobile oil change</p>
        <div className="checklist">
          <ul className="checklist-column">
            <li><FaCheckCircle className="check-icon" /> Lights inspection</li>
            <li><FaCheckCircle className="check-icon" /> Brakes inspection</li>
            <li><FaCheckCircle className="check-icon" /> Battery inspection</li>
            <li><FaCheckCircle className="check-icon" /> Air filter inspection</li>
            <li><FaCheckCircle className="check-icon" /> Wiper blade inspection</li>
          </ul>
          <ul className="checklist-column">
            <li><FaCheckCircle className="check-icon" /> Tyre Pressure inspection</li>
            <li><FaCheckCircle className="check-icon" /> Coolant level top-up</li>
            <li><FaCheckCircle className="check-icon" /> Brake fluid level top-up</li>
            <li><FaCheckCircle className="check-icon" /> Steering fluid level top-up</li>
            <li><FaCheckCircle className="check-icon" /> Windscreen washer fluid top-up</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HealthCheck;
