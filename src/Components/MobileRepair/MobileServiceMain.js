import React, {useEffect, useState} from 'react';
import './css/mobileCarMain.css';
import { FaPhone, FaUser } from 'react-icons/fa';
import image1 from './../../assets/mobileCarService/car-repair-app.webp'
import {fetchServiceByTitle} from "../../BackendFunctions/FetchServicesbyTitle";
import CustomBookNowModal from "../CommonComponents/BookNowModal";
function MobileCarServiceMain({title,index}) {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [serviceData, setServiceData] = useState(null);

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
  const packageData = serviceData?.packages?.[index];
  return (
    <>
       <CustomBookNowModal show={showModal} handleClose={handleCloseModal} packageName={packageData?.packageName} serviceName={serviceData?.serviceTitle} price={packageData?.newPrice} />
       <div className="mobile-car-service">
        <div className="service-image">
        <img src={image1} alt="Service Van" />
      </div>
      <div className="service-content">
        <h2>CAR SERVICE AT YOUR DOORSTEP</h2>
        <p>Avail the services of our mobile car mechanic by booking a package. Get your car serviced at your time, and at your place.</p>
         <div className='old-price'>
            <h3>Old Price</h3>
             <h3>{packageData?.oldPricenew ? `${packageData.oldPricenew} AED` : 'N/A'}</h3>
         </div>
        <div className='new-price'>
            <h3>New Price</h3>
             <h3> <h3> {packageData?.newPrice? `${packageData.newPrice} AED` : 'N/A'}</h3></h3>
         </div>
        <h3>Save Up to {packageData?.oldPricenew-packageData?.newPrice} AED</h3>
        <button className="btn btn-success btn-block" onClick={handleShowModal}>BOOK NOW</button>
        <p className="call-us">or call us on <a href="tel:8002665464">8002665464</a></p>
      </div>
    </div>
    </>
  );
}

export default MobileCarServiceMain;
