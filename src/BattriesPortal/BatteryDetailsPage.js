import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import "./css/batteryDetails.css";
import CustomBookNowModal from "../Components/CommonComponents/BookNowModal";

const BatteryDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const { state: battery } = useLocation();

  if (!battery) {
    return (
      <div className="battery-details-container">
        <p>Battery details not available.</p>
      </div>
    );
  }

  return (
   <>
      <CustomBookNowModal
          show={showModal}
          handleClose={handleCloseModal}
          packageName={battery.name}
          serviceName={battery.capacity}
          price={battery.price}
      />
    <div className="battery-details-container">
      <img
        src={battery.image}
        alt={battery.name}
        className="battery-details-image"
      />
      <div className="battery-details-content">
        <h1>{battery.name}</h1>
        <p>
          <strong>Price:</strong> {battery.price}
        </p>
        <p>
          <strong>Capacity:</strong> {battery.capacity}
        </p>
        <p>
          <strong>Description:</strong> High-performance battery suitable for all
          types of power needs.
        </p>
        <button className="buy-now-btn" onClick={()=>handleShowModal()}>Buy Now</button>
      </div>
    </div>
   </>
  );
};

export default BatteryDetails;
