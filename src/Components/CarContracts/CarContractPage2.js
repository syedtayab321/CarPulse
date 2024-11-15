import React, {useEffect, useState} from 'react';
import image1 from './../../assets/RoadSideAssistant/images/image1.png';
import icon1 from './../../assets/RoadSideAssistant/images/main-icon.svg';
import CustomBookNowModal from '../CommonComponents/BookNowModal';
import {fetchServiceByTitle} from "../../BackendFunctions/FetchServicesbyTitle";

const CarContractPage2 = ({title}) => {
  const [serviceData, setServiceData] = useState(null);
   const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', price: '' });
  const handleShowModal = (title, price) => {
    setModalData({ title, price });
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);
  const leftSectionServices = [
    {
      title: 'How does a service contract work?',
      description: 'Our service contracts are prepaid service packages that help with preventive periodic maintenance. So, for a fixed fee our vehicle maintenance contracts include all scheduled servicing.',
      icon: icon1,
    },
    {
      title: 'How long is a service contract valid for?',
      description: 'A service contract can be purchased for 1, 2, or 3 years. The number of services covered would depend on the make of the car, the model, and the mileage. Most cars typically require servicing every 10,000 kms or 6 months, whichever comes earlier.',
      icon: icon1,
    },
    {
      title: 'What do service contracts cover?',
      description: 'What exactly is covered depends on the car make and model. Select your car make and model while booking a service to get all the details',
      icon: icon1,
    },
  ];

  useEffect(() => {
    const getService = async () => {
      try {
        const data = await fetchServiceByTitle(title);
        setServiceData(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch service data:", error);
      }
    };
    getService();
  }, []);

  if (serviceData === null){
    return (
      <div>Loading.....</div>
    );
  }
    const packageData = serviceData?.packages;

  return (
    <>
       Pass modalData properties as props to CustomBookNowModal
      <CustomBookNowModal
        show={showModal}
        handleClose={handleCloseModal}
        serviceName={'Service Contract'}
        price={modalData.price}
        packageName={modalData.title}
      />

      <div className="main-container">

        {/* Left Section */}
        <div className="left-section">
          <div className="heading">
            <h2>Service Contract</h2>
          </div>
          {leftSectionServices.map((service, index) => (
            <div key={index} className="content-section">
              <div className="content-left">
                <h3 style={leftHeading}>{service.title}</h3>
                <p style={LeftfontStyle}>{service.description}</p>
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
            <h2>{serviceData.serviceTitle}</h2>
          </div>
          {packageData.map((service, index) => (
            <div key={index} className="content-section">
              <div className="content-right">
                <img className="circle-image" src={icon1} alt="main" />
              </div>
              <div className="content-left">
                <h3>{service.durationInYears} Year</h3>
                <p>{service.description}</p>
                <h3  style={fontStyle}>Starting From: {service.newPrice}</h3>
                <button className="btn btn-success" onClick={() => handleShowModal(service.durationInYears, service.newPrice)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default CarContractPage2;


const fontStyle ={
  fontSize :'15px',
  color :'red',
}

const LeftfontStyle ={
  fontSize :'15px',
}

const leftHeading ={
  fontSize :'22px',
  color:'purple',
}