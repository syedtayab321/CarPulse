import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image1 from './../../assets/RoadSideAssistant/images/image2.png'
import CustomBookNowModal from "../CommonComponents/BookNowModal";
const RoadsideAssistance = () => {
   const [showModal, setShowModal] = useState(false);
   const handleShowModal = () => setShowModal(true);
   const handleCloseModal = () => setShowModal(false);
  return (
    <>
       <CustomBookNowModal show={showModal} handleClose={handleCloseModal} />
        <Container className="roadside-assistance-3 my-5">
      <h2 className="text-center text-success">Roadside Assistance</h2>
      <p className="text-center">
        Need Roadside Assistance? Get on-demand service from just about anywhere in Dubai.
      </p>
      <Row className="services-section">
        <Col md={6}>
          <h4>Our Roadside Assistance service includes:</h4>
          <ul className="list-unstyled">
            <li>✔️ Flat Tyre Change</li>
            <li>✔️ Car Battery Jumpstart</li>
            <li>✔️ Car Recovery</li>
            <li>✔️ Emergency Fuel</li>
            <li>✔️ Flat Tyre Replacement Service</li>
            <li>✔️ Easy & Convenient Car Battery Replacement In Dubai</li>
            <li>✔️ Accident Recovery</li>
            <li>✔️ Breakdown Assistance</li>
          </ul>
        </Col>
        <Col md={6} className="text-center">
          <img src={image1} alt="Flat Tyre" className="img-fluid tyre-image" />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={12}>
          <h4 className="text-success">FLAT TYRE CHANGE SERVICE</h4>
          <p>
            We provide Mobile Flat Tyre Change service 24x7. Our on-site mobile tyre expert can be at your location within 40 minutes and help you change your spare tyre to get you back on the road as soon as possible.
          </p>
          <p>
            Book for a flat tyre change and get highly trained & experienced technicians within just a few clicks or call us for emergency flat tyre change service at your doorstep within 40 minutes in Dubai call <a href="tel:8002665464" className="text-success">8002665464 (800 BOOKING)</a>
          </p>
          <div className="button-group">
            <Button variant="success" className="me-2" onClick={handleShowModal}>BOOK NOW</Button>
            <Button variant="outline-success">CALL US NOW</Button>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default RoadsideAssistance;
