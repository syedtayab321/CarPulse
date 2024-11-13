import React from 'react';
import { Container, Row, Col, Nav, Tab, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faMobileAlt, faTruck, faWrench, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/ServiceDetailsPage2.css';
import video1 from './../../assets/videos/video1.mp4'
const ServiceDetailsPage2 = () => {
  return (
    <Container className="how-it-works-section">
      <h2 className="text-center mt-5">HOW IT WORKS</h2>

      <Tab.Container defaultActiveKey="youBook">
        <Nav variant="tabs" className="justify-content-center mt-3">
          <Nav.Item>
            <Nav.Link eventKey="youBook">You Book</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="weCollect">We Collect</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="weService">We Service</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="weDeliver">We Deliver</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="text-left mt-4">
          <Tab.Pane eventKey="youBook">
            <Row>
              <Col md={6}>
                <h5><FontAwesomeIcon icon={faPhone} /> Phone</h5>
                <p>Our call center operates from 8 AM to 9 PM from Monday to Saturday, and 10 AM - 8 PM on Sunday. Call us at <a href="tel:8002665464" className="phone-link">8002665464</a>.</p>
                <h5><FontAwesomeIcon icon={faGlobe} /> Online</h5>
                <p>Make a booking online through our website.</p>
                <h5><FontAwesomeIcon icon={faMobileAlt} /> Download the App</h5>
                <p>Book with just a tap on our mobile app.</p>

                <Form className="download-app-form">
                  <Form.Group controlId="formPhone">
                    <Form.Label>Enter your number below to get the download link</Form.Label>
                    <div className="d-flex">
                      <Form.Control type="text" placeholder="+971" />
                      <Button variant="success">Get the link now</Button>
                    </div>
                  </Form.Group>
                </Form>
              </Col>
              <Col md={6} className="video-placeholder">
                {/* Replace with your video link or file */}
                <video className="video-background" autoPlay loop muted>
                  <source src={video1} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="weCollect">
            <Row>
              <Col md={6}>
                <h5><FontAwesomeIcon icon={faTruck} /> Collection Service</h5>
                <p>Our team will come to your location to collect your vehicle at a time that suits you.</p>
                <h5><FontAwesomeIcon icon={faCheckCircle} /> Safety First</h5>
                <p>We ensure your vehicle is transported safely to our service center.</p>
              </Col>
              <Col md={6} className="video-placeholder">
                {/* You could add a second video here if desired */}
                <video className="video-background" autoPlay loop muted>
                  <source src={video1} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="weService">
            <Row>
              <Col md={6}>
                <h5><FontAwesomeIcon icon={faWrench} /> Expert Service</h5>
                <p>Our certified technicians provide comprehensive service and repairs, ensuring top quality.</p>
                <h5><FontAwesomeIcon icon={faCheckCircle} /> Quality Check</h5>
                <p>Each vehicle undergoes a thorough quality check before it is returned to you.</p>
              </Col>
              <Col md={6} className="video-placeholder">
                <video className="video-background" autoPlay loop muted>
                  <source src={video1} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="weDeliver">
            <Row>
              <Col md={6}>
                <h5><FontAwesomeIcon icon={faTruck} /> Home Delivery</h5>
                <p>We deliver your vehicle back to your location after service is completed, ready to drive.</p>
                <h5><FontAwesomeIcon icon={faCheckCircle} /> Satisfaction Guaranteed</h5>
                <p>Our goal is to ensure your satisfaction with our service. You’re ready to hit the road again!</p>
              </Col>
              <Col md={6} className="video-placeholder">
                <video className="video-background" autoPlay loop muted>
                  <source src={video1} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {/* Right side callback button */}
      <div className="callback-button">
        <Button variant="danger">Request a Callback</Button>
      </div>
    </Container>
  );
};

export default ServiceDetailsPage2;
