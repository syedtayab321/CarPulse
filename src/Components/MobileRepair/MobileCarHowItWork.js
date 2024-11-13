import React from 'react';
import image1 from './../../assets/mobileCarService/mobile1.jpg';
import image2 from './../../assets/mobileCarService/mobile1.jpg';
import image3 from './../../assets/mobileCarService/mobile1.jpg';
function HowItWorks() {
  return (
    <div className="mobile-how-it-works">
      <h3>HOW IT WORKS</h3>
      <p>Get a mobile car service in 3 simple steps</p>
      <div className="steps">
        <div className="step">
          <img src={image1} alt="Book Service" />
          <h4>Book a mobile car service package</h4>
          <p>Book a mobile car service online, or on the Service My Car app.</p>
        </div>
        <div className="step">
          <img src={image2} alt="Arrive" />
          <h4>We arrive at your doorstep</h4>
          <p>Our trusty mobile car mechanic will arrive at the location provided in the booking.</p>
        </div>
        <div className="step">
          <img src={image3} alt="Car Fixed" />
          <h4>Your car gets fixed</h4>
          <p>Congrats! You've successfully gotten your car fixed at your doorstep.</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
