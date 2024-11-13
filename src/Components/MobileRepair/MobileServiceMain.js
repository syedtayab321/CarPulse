import React from 'react';
import './../../assets/mobileCarService/mobileCarMain.css';
import { FaPhone, FaUser } from 'react-icons/fa';
import image1 from './../../assets/mobileCarService/car-repair-app.webp'
function MobileCarServiceMain() {
  return (
    <div className="mobile-car-service">
        <div className="service-image">
        <img src={image1} alt="Service Van" />
      </div>
      <div className="service-content">
        <h2>CAR SERVICE AT YOUR DOORSTEP</h2>
        <p>Avail the services of our mobile car mechanic by booking a package. Get your car serviced at your time, and at your place.</p>
        <div className="input-group mb-3">
          <span className="input-group-text"><FaUser /></span>
          <input type="text" className="form-control" placeholder="Enter Your Name" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text"><FaPhone /></span>
          <input type="text" className="form-control" placeholder="Enter Your Contact Number" />
        </div>
        <button className="btn btn-success btn-block">BOOK NOW</button>
        <p className="call-us">or call us on <a href="tel:8002665464">8002665464</a></p>
      </div>
    </div>
  );
}

export default MobileCarServiceMain;
