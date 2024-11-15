import React from 'react';
import { Container, Row, Col, Nav, Tab, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faMobileAlt, faTruck, faWrench, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './css/ServiceDetailsPage2.css';
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

        <Tab.Content className="text-left">
          <Tab.Pane eventKey="youBook">
            <Row>
              <Col md={6}>
                <h5><FontAwesomeIcon icon={faPhone} /> Phone</h5>
                <p>Our call center operates from 8 AM to 9 PM from Monday to Saturday, and 10 AM - 8 PM on Sunday. Call us at <a href="tel:+971 50 432 1395" className="phone-link">+971 50 432 1395</a>.</p>
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
                <p>After making the booking, our driver will arrive at a time and location of your choice. We will inspect your car and check for any faults and concerns you may have. A collection report will then be generated and sent on sms & email.</p>
                <h5><FontAwesomeIcon icon={faCheckCircle} /> Safety First</h5>
                <p>If you have any concerns or enquiries, please contact customer support at 8002665464.
                  Please remove any valuable belongings as your car passes through multiple departments.
                  All our staﬀ wear face masks, gloves, and take other necessary precautions to prevent the spread of COVID-19.</p>
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
                <p>Once the car arrives at the workshop, a service advisor is assigned and a full detailed report with images is generated again. The car is checked by the next available technician.</p>
                <h5><FontAwesomeIcon icon={faCheckCircle} /> Quality Check</h5>
                <p>After checking, the health check report is sent by sms & email.
                    If needed, our parts advisors search for highest quality parts with the best prices in the market. A quotation is then generated and sent to you via sms & email to accept or reject. No work is carried out without your approval.
                    Once we receive your decision, the parts are ordered and your car repair or service is initiated.</p>
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
                <p>
                  We Deliver Once the car service is complete, it goes for a quality check, and a road test. If it fails the quality check, it gets sent back to the workshop for further diagnosis.
                  After passing the road test, the car goes for cleaning. The insides get vacuumed and the outside gets shampooed, washed, and dried.
                  The car goes for another quality check after the cleaning. After it passes, an invoice will be generated and a link to make the online payment gets sent to you by SMS and email.
                  Once the invoice is paid, a driver is then assigned to deliver your car back to you. The driver will carry out a final inspection with you and generate a delivery report which will be sent to you on SMS and email.</p>
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

    </Container>
  );
};

export default ServiceDetailsPage2;
