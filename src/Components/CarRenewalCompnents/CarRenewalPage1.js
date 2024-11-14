import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import googlePlayIcon from './../../assets/CarRenewal/playstore.webp';
import appStoreIcon from './../../assets/CarRenewal/appstore.webp';
import phoneMockup from './../../assets/CarRenewal/phone2.png';

const CarRenewalPage1 = () => {
  return (
    <div className="carRenewal">
      <Container className="content-container">
        <Row>
          <Col md={6} className="text-content">
            <h1>CAR SERVICE MADE SIMPLE</h1>
            <p>The Best Car Service App in the United Arab Emirates</p>
            <ul>
              <li>🚗 Quick and efficient service</li>
              <li>💸 Best price guarantee</li>
              <li>🔧 12-month parts and labor warranty</li>
            </ul>
            <Form className="user-form">
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Full Name" />
                </Col>
                <Col>
                  <Form.Control type="tel" placeholder="Mobile Number" />
                </Col>
                <Col xs="auto">
                  <Button variant="dark">LET'S GO</Button>
                </Col>
              </Row>
            </Form>
            <div className="download-buttons">
              <img src={googlePlayIcon} alt="Google Play" className="download-icon" />
              <img src={appStoreIcon} alt="App Store" className="download-icon" />
            </div>
          </Col>
          <Col md={6} className="image-content">
            <img src={phoneMockup} alt="Phone Mockup" className="phone-mockup" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarRenewalPage1;
