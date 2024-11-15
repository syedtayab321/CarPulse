import React, { useState } from 'react';
import image1 from './../../assets/RoadSideAssistant/images/image1.png';
import icon1 from './../../assets/RoadSideAssistant/images/main-icon.svg';
import CustomBookNowModal from '../CommonComponents/BookNowModal';

const RoadsideAssistancePage1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', price: '' });

  // Function to open the modal with specific data
  const handleShowModal = (title, price) => {
    setModalData({ title, price });
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const leftSectionServices = [
    {
      title: 'Flat Tyre',
      description: 'Stuck with a flat tyre? Our patrol can be with you within 40 minutes and help you change your spare tyre to get you back on the road as soon as possible.',
      price: '345 AED',
      icon: icon1,
    },
    {
      title: 'Flat Battery',
      description: 'Stuck with a flat battery? We can come and jump start your car battery within 40 minutes. We will also generate a free battery report for you.',
      price: '345 AED',
      icon: icon1,
    },
    {
      title: 'Pickup and Drop Off',
      description: 'Need a recovery? Our recovery truck can be at your location within 40 minutes. We recover cars, vans, and mini-buses.',
      price: '345 AED',
      icon: icon1,
    },
  ];

  const rightSectionServices = [
    {
      title: '1 Car Policy',
      description: `1 Pick up and Drop off
                    1 Flat Battery
                    1 Flat Tyre
                    1 Registration Renewal (Excluding RTA Charge) / * Per Year`,
      price: '345 AED',
      icon: icon1,
    },
    {
      title: '2 Car Policy',
      description: `2 Flat Tyre
                    2 Flat Battery
                    2 Pick up and Drop off
                    2 Registration Renewal (Excluding RTA Charge) / * Per Year`,
      price: '345 AED',
      icon: icon1,
    },
    {
      title: '3 Car Policy',
      description: `3 Flat Tyre
                    3 Flat Battery
                    3 Pick up and Drop off
                    3 Registration Renewal (Excluding RTA Charge) / * Per Year`,
      price: '345 AED',
      icon: icon1,
    },
  ];

  return (
    <>
      {/* Pass modalData properties as props to CustomBookNowModal */}
      <CustomBookNowModal
        show={showModal}
        handleClose={handleCloseModal}
        serviceName={'Roadside Assistance'}
        price={modalData.price}
        packageName={modalData.title}
      />

      <div className="main-container">

        {/* Left Section */}
        <div className="left-section">
          <div className="heading">
            <h2>One Time Package</h2>
          </div>
          {leftSectionServices.map((service, index) => (
            <div key={index} className="content-section">
              <div className="content-left">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <h3 className="price">{service.price}</h3>
                <button className="btn" onClick={() => handleShowModal(service.title, service.price)}>Book Now</button>
              </div>
              <div className="content-right">
                <img className="circle-image" src={service.icon} alt="main" />
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="center-image">
          <img src={image1} alt="main-image" />
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="heading">
            <h2>12 Month Assistant</h2>
          </div>
          {rightSectionServices.map((service, index) => (
            <div key={index} className="content-section">
              <div className="content-right">
                <img className="circle-image" src={service.icon} alt="main" />
              </div>
              <div className="content-left">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <h3 className="price">{service.price}</h3>
                <button className="btn btn-success" onClick={() => handleShowModal(service.title, service.price)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default RoadsideAssistancePage1;
