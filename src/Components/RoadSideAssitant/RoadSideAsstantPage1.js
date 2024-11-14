import React,{useState} from 'react';
import image1 from './../../assets/RoadSideAssistant/images/image1.png';
import icon1 from './../../assets/RoadSideAssistant/images/main-icon.svg'
import CustomBookNowModal from "../CommonComponents/BookNowModal";

const RoadsideAssistancePage1 = () => {
    const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
        <CustomBookNowModal show={showModal} handleClose={handleCloseModal} />
        <div className='main-container'>
             <div className='left-section'>
                 <div className='heading'>
                    <h2>One Time Package</h2>
                 </div>
                  <div className='content-section'>
                        <div className='content-left'>
                            <h3>Flat Tyre</h3>
                            <p>Stuck with a flat tyre? Our patrol can be with you within 40 minutes and help you change your spare tyre to get you back on the road as soon as possible</p>
                            <h3 className='price'>345 AED</h3>
                            <button className='btn' onClick={handleShowModal}>Book Now</button>
                        </div>
                        <div className='content-right'>
                             <img className='circle-image' src={icon1} alt='main'/>
                        </div>
                 </div>
                  <div className='content-section'>
                        <div className='content-left'>
                            <h3>Flat Battery</h3>
                            <p>Stuck with a flat battery? We can come and jump start your car battery within 40 minutes. We will also generate a free battery report for you</p>
                            <h3 className='price'>345 AED</h3>
                            <button className='btn' onClick={handleShowModal}>Book Now</button>
                        </div>
                        <div className='content-right'>
                             <img className='circle-image' src={icon1} alt='main'/>
                        </div>
                 </div>
                  <div className='content-section'>
                        <div className='content-left'>
                            <h3>Pickup and Drop Off</h3>
                            <p>Need a recovery? Our recovery truck can be at your location within 40 minutes. We recover cars, vans and mini-buses</p>
                            <h3 className='price'>345 AED</h3>
                            <button className='btn' onClick={handleShowModal}>Book Now</button>
                        </div>
                        <div className='content-right'>
                             <img className='circle-image' src={icon1} alt='main'/>
                        </div>
                 </div>
             </div>
             <div className='center-image'>
                 <img src={image1}  alt='main-image' />
             </div>
             <div className='right-section'>
                    <div className='heading'>
                      <h2>12 Month Assistant</h2>
                    </div>
                      <div className='content-section'>
                        <div className='content-right'>
                             <img className='circle-image' src={icon1} alt='main'/>
                        </div>
                        <div className='content-left'>
                            <h3>1 Car Policy</h3>
                            <p>
                            1 Pick up and Drop off<br/>
                            1 Flat Battery<br/>
                            1 Flat Tyre<br/>
                            1 Registration Renewal (Excluding RTA Charge) / * Per Year</p>
                            <h3 className='price'>345 AED</h3>
                            <button className='btn btn-success' onClick={handleShowModal}>Book Now</button>
                        </div>
                 </div>
                      <div className='content-section'>
                        <div className='content-right'>
                             <img className='circle-image' src={icon1} alt='main'/>
                        </div>
                        <div className='content-left'>
                            <h3>2 Car Policy</h3>
                            <p>2 Flat Tyre<br/>
                                2 Flat Battery<br/>
                                2 Pick up and Drop off<br/>
                                2 Registration Renewal (Excluding RTA Charge) / * Per Year</p>
                            <h3 className='price'>345 AED</h3>
                            <button className='btn btn-success' onClick={handleShowModal}>Book Now</button>
                        </div>
                 </div>
                      <div className='content-section'>
                        <div className='content-right'>
                             <img className='circle-image' src={icon1} alt='main'/>
                        </div>
                        <div className='content-left'>
                            <h3> 3 Car Policy</h3>
                            <p>
                                        3 Flat Tyre<br/>
                                        3 Flat Battery<br/>
                                        3 Pick up and Drop off<br/>
                                        3 Registration Renewal (Excluding RTA Charge) / * Per Year</p>
                            <h3 className='price'>345 AED</h3>
                            <button className='btn btn-success' onClick={handleShowModal}>Book Now</button>
                        </div>
                 </div>
             </div>
        </div>
    </>
  );
};

export default RoadsideAssistancePage1;
