import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MajorServices.css';
import { FaCar } from 'react-icons/fa';
import CustomBookNowModal from "./BookNowModal";
import {fetchServiceByTitle} from "../../BackendFunctions/FetchServicesbyTitle";

function MajorServicePage({title , index}) {

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
          <div className="detail-container my-5">
            <div className="top-bar py-2 text-center text-white">
              <h3>{serviceData?.serviceTitle || 'Service Title'}</h3>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-8 p-4 shadow-sm service-box position-relative">
                <div className="most-popular-tag">Most Popular</div>
                <h2 className="text-center mb-4">{packageData?.packageName ? `${packageData.packageName}` : 'N/A'}</h2>
                 {packageData && (
                     <div className="row">
                  {/* What's Included */}
                  <div className="col-md-6">
                    <h4>WHAT'S INCLUDED</h4>
                    <ul className="list-unstyled">
                      {packageData?.includedItems?.map((item, index) => (
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
                      {packageData?.notIncludedItems?.map(
                        (item, index) => (
                          <li key={index} className="not-included-item">
                            <input type="checkbox" readOnly />
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                    <div className="price-section mt-4 text-center">
                      <span className="original-price">
                        {packageData?.oldPrice ? `${packageData.oldPrice} AED` : 'N/A'}
                      </span>
                      <span className="discounted-price">
                        {packageData?.newPrice ? `${packageData.newPrice} AED` : 'N/A'}
                      </span>
                    </div>
                  </div>
                  </div>
                 )}
                <div className='descriptionBox'>
                      <h3>DESCRIPTION</h3>
                      <p>
                          {packageData?.description ? `${packageData.description} AED` : 'No Description Provided'}
                      </p>
                  </div>
                <div className="discount-box p-3 mt-4 position-relative">
                  <h5>GET FREE OIL AND AED 150 OFF WHEN YOU BOOK TODAY</h5>
                  <h2>NOW  {packageData?.newPrice ? `${packageData.newPrice} AED` : 'N/A'}</h2>

                  {/* Countdown Timer */}
                  <div className="d-flex justify-content-center my-3">
                    {["DAYS", "HOURS", "MINUTES", "SECONDS"].map((unit, index) => (
                      <div key={index} className="countdown-unit text-center mx-2">
                        <span className="countdown-number">00</span>
                        <span className="countdown-label">{unit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-danger book-now-btn" onClick={handleShowModal}>
                    BOOK NOW <FaCar className="car-icon animate-car" />
                  </button>
                </div>

              </div>


              {/* Callback Request Button */}
              {/*<button className="callback-request-btn">Request a Callback</button>*/}
            </div>
          </div>
    </>
  );
}

export default MajorServicePage;
