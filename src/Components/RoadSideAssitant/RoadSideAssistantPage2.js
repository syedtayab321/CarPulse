import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import icon1 from "../../assets/RoadSideAssistant/images/icon1.svg";
import icon2 from './../../assets/RoadSideAssistant/images/icon2.svg';
import icon3 from './../../assets/RoadSideAssistant/images/icon3.svg';
import icon4 from './../../assets/RoadSideAssistant/images/icon4.png';
import icon5 from './../../assets/RoadSideAssistant/images/icon5.png';
import icon6 from './../../assets/RoadSideAssistant/images/icon6.png';

const RoadsideAssistancePage2 = () => {

  return (
    <Container className="my-5 road2">
      <Row>
        {/* Title Section */}
        <Col md={6} className="mb-4">
          <h2 className="section-title text-center">WHY CHOOSE US</h2>
          <Row className="gy-3 justify-content-center">
            {/* Service Cards */}
            {[{ icon: icon1, text: '24 Hour Roadside Assistance' },
              { icon: icon2, text: 'Quick Service' },
              { icon: icon3, text: 'On-Site Help' },
              { icon: icon4, text: 'Top-Rated Customer Service' },
              { icon: icon5, text: 'Convenience' },
              { icon: icon6, text: 'Professionalism' }].map((service, idx) => (
              <Col xs={6} sm={4} key={idx} className="text-center">
                <Card className="choose-card p-3 shadow-sm">
                  <img src={service.icon} alt={service.text} className="service-icon mb-3" />
                  <Card.Text>{service.text}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* How It Works Section */}
        <Col md={6} className="mb-4">
          <h2 className="section-title text-center">HOW IT WORKS</h2>
          <ul className="how-it-works-list">
            <li>
              <span className="step-number">1</span> You Book Online
              <ul className="sub-list">
                <li><strong>Phone</strong> - Call our 24-hour call center from Saturday to Thursday. Dial 8002665464.</li>
                <li><strong>Online</strong> - Book online 24 hours a day.</li>
                <li><strong>Download the App</strong> - Book at the tap of a button with our mobile app.</li>
              </ul>
            </li>
            <li><span className="step-number">2</span> We arrive</li>
            <li><span className="step-number">3</span> We Fix</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default RoadsideAssistancePage2;
