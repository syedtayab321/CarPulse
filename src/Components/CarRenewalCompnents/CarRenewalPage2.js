import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './../../assets/CarRenewal/mobile.png';
import googlePlayIcon from './../../assets/CarRenewal/playstore.webp';
import appStoreIcon from './../../assets/CarRenewal/appstore.webp';
import {Link} from "@mui/material";
const CarRenewalPage2 = () => {
  return (
    <div className="renewal-app-container">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src={image1}
            alt="App Screenshot"
            className="phone-image"
          />
        </div>

        <div className="col-md-8">
          <h2 className="title">THE SERVICE MY CAR APP</h2>
          <p className="description">
            Service My Car is the United Arab Emirates's first and largest car
            servicing network. Get all your car maintenance needs sorted at the
            tap of a button when you use the Service My Car app. That’s right.
            You can now do more of what you love, by simply leaving the car
            maintenance to us.
          </p>
          <p className="description">
            For utmost convenience, you get free collection & delivery with all
            our services. Your car also gets treated to a comprehensive 360°
            health check at all our partner garages.
          </p>
          <p className="description">
            We service all makes and models with most services carried out
            within 48 hours. Moreover, we supply genuine and aftermarket parts,
            based on your choice. You get 12-month/15,000km genuine parts and
            labour warranty with all our services.
          </p>

          <h3 className="sub-title">Want a car repair quote?</h3>
          <p className="description">
            Getting a quote for your car repair has never been easier. Simply
            fill the form in the ‘Car Repair’ section of our app. A trusty
            service advisor will get back to you within 24 hours with your
            quote. Service My Car now boasts over 30 licensed and approved
            state-of-the-art, fully-equipped service centres. Treat your car to
            a service today. Download the Service My Car app now.
          </p>

          {/* Download Buttons */}
          <div className="download-buttons">
            <Link to="#" className="btn btn-dark download-btn">
              <img
                src={googlePlayIcon}
                alt="Google Play"
              />
            </Link>
            <Link to="#" className="btn btn-dark download-btn">
              <img
                src={appStoreIcon}
                alt="App Store"
              />
            </Link>
          </div>

          {/* Quote Button */}
          <div className="quote-button-container">
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRenewalPage2;
