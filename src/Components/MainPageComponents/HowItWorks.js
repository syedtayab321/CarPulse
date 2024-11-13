import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CheckCircleOutline, Build, CarRepair } from '@mui/icons-material';
import './../../assets/css/howwework.css';

const HowWeWork = () => {
  return (
    <Container fluid className="how-we-work-container py-5">
      <h2 className="text-center  font-weight-bold mb-4">How Our Car Services Work</h2>

      <Row className="justify-content-center">
        {/* Step 1 */}
        <Col md={4} sm={6} className="mb-1">
          <Card className="service-card">
            <Card.Body>
              <div className="service-icon text-success">
                <Build fontSize="large" />
              </div>
              <Card.Title className="service-title">Book an Appointment</Card.Title>
              <Card.Text>
                Start by booking an appointment online for any car service you need. Choose the time and service type that best fits your schedule.
              </Card.Text>
              {/*<Button variant="success" className="w-100">Book Now</Button>*/}
            </Card.Body>
          </Card>
        </Col>

        {/* Step 2 */}
        <Col md={4} sm={6} className="mb-4">
          <Card className="service-card">
            <Card.Body>
              <div className="service-icon text-info">
                <CarRepair fontSize="large" />
              </div>
              <Card.Title className="service-title">Vehicle Inspection</Card.Title>
              <Card.Text>
                Our expert mechanics perform a thorough inspection of your vehicle to identify any issues that need attention.
              </Card.Text>
              {/*<Button variant="primary" className="w-100">Learn More</Button>*/}
            </Card.Body>
          </Card>
        </Col>

        {/* Step 3 */}
        {/*<Col md={4} sm={6} className="mb-4">*/}
        {/*  <Card className="service-card">*/}
        {/*    <Card.Body>*/}
        {/*      <div className="service-icon text-warning">*/}
        {/*        <CarRepair fontSize="large" />*/}
        {/*      </div>*/}
        {/*      <Card.Title className="service-title">Service & Repair</Card.Title>*/}
        {/*      <Card.Text>*/}
        {/*        Once the inspection is complete, our team will perform the necessary repairs or maintenance to ensure your car is in optimal condition.*/}
        {/*      </Card.Text>*/}
        {/*      /!*<Button variant="warning" className="w-100">View Services</Button>*!/*/}
        {/*    </Card.Body>*/}
        {/*  </Card>*/}
        {/*</Col>*/}

        {/* Step 4 */}
        <Col md={4} sm={6} className="mb-4">
          <Card className="service-card">
            <Card.Body>
              <div className="service-icon text-danger">
                <CheckCircleOutline fontSize="large" />
              </div>
              <Card.Title className="service-title">Final Quality Check</Card.Title>
              <Card.Text>
                After completing the service, we conduct a final quality check to ensure everything is running smoothly and your car is safe to drive.
              </Card.Text>
              {/*<Button variant="danger" className="w-100">Book Your Service</Button>*/}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HowWeWork;
