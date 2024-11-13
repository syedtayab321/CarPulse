import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import playstore from './../../assets/images/play-store.png';
import appstore from './../../assets/images/app-store.png';
import appDesign from './../../assets/images/appdesign.png';
const RequestQuote = () => {
  return (
    <Container className="request-quote my-5">
      <h2 className="text-center">REQUEST A QUOTE</h2>
      <p className="text-center">Need a car service, a car repair, or general body work? Get a quote now.</p>

      <Row className="justify-content-center mt-4">
        <Col xs={12} md={7} className="mb-4 mb-md-0">
          <Form>
            <Form.Group controlId="carMake" className="mb-3">
              <Form.Select>
                <option>Select Car Make</option>
                <option>Car 1</option>
                <option>Car 2</option>
                <option>Car 3</option>
                <option>Car 4</option>
                <option>Car 5</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="carModel" className="mb-3">
              <Form.Select>
                <option>Select Car Model</option>
                <option>Car Model 1</option>
                <option>Car Model 2</option>
                <option>Car Model 3</option>
                <option>Car Model 4</option>
                <option>Car Model 5</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="fullName" className="mb-3">
              <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>

            <Form.Group controlId="contactNumber" className="mb-3">
              <Form.Control type="text" placeholder="Contact Number" />
            </Form.Group>

            <Form.Group controlId="emailAddress" className="mb-3">
              <Form.Control type="email" placeholder="Enter Email Address" />
            </Form.Group>

            <Form.Group controlId="chassisNumber" className="mb-3">
              <Form.Control type="text" placeholder="Chassis / Vin Number" />
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
              <Form.Control as="textarea" rows={3} placeholder="Enter Description" maxLength="500" />
              <small className="text-muted float-end">500 characters left</small>
            </Form.Group>

            <Form.Group controlId="fileUpload" className="mb-3">
              <Form.Control type="file" multiple />
              <small className="text-muted">Upload your files here (Max 10 files can be uploaded at once)</small>
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">SUBMIT</Button>
          </Form>
        </Col>

        <Col xs={12} md={4} className="info-box ms-md-4 mt-4 mt-md-0">
          <div className="help-box p-3 text-center text-md-start">
            <h4 className="text-success"><span role="img" aria-label="car trouble">😟</span> Car Trouble?</h4>
            <p>Don't worry, we got you!</p>
            <Button variant="success" className="w-100 my-2">Talk To Our Expert</Button>
            <h3 className="text-success">(04) 703 8999</h3>
          </div>

          <div className="promo-box p-3 mt-3 text-center text-md-start">
            <h5><span className="text-danger">GET 10% OFF</span> YOUR FIRST BOOKING</h5>
            <ol className="list-unstyled">
              <li>1. Download our app</li>
              <li>2. Register, make a booking and apply discount code REG10</li>
              <li>3. Save 10% OFF your first service</li>
            </ol>
            <img src={appDesign} alt="App" className="img-fluid mt-3" />
            <div className="d-flex justify-content-around mt-2">
              <img src={playstore} alt="Google Play" style={{ width: '100px' }} />
              <img src={appstore} alt="App Store" style={{ width: '100px' }} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestQuote;
