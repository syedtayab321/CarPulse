import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './css/customContact.css';
import { FaMobileAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

function CustomContactComponent() {
    return (
        <Container className="my-5 contact-component">
            <Row className="justify-content-center">
                <Col xs={12} md={4} className="mb-4">
                    <Card className="contact-card text-center">
                        <Card.Body>
                            <FaMobileAlt size={40} className="contact-icon" />
                            <Card.Text className="contact-text">BOOK A SERVICE ON OUR APP</Card.Text>
                            <Button variant="custom-purple" className="w-100 mt-2">
                                <FaMobileAlt /> DOWNLOAD
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} className="mb-4">
                    <Card className="contact-card text-center">
                        <Card.Body>
                            <FaPhoneAlt size={40} className="contact-icon" />
                            <Card.Text className="contact-text">TALK TO OUR SERVICE EXPERT</Card.Text>
                            <Button variant="custom-purple" className="w-100 mt-2">
                                <FaPhoneAlt /> CALL NOW
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} className="mb-4">
                    <Card className="contact-card text-center">
                        <Card.Body>
                            <FaWhatsapp size={40} className="contact-icon" />
                            <Card.Text className="contact-text">CHAT WITH OUR SERVICE EXPERT</Card.Text>
                            <a href='https://wa.me/+971581329990' >
                                <Button variant="custom-purple" className="w-100 mt-2">
                                <FaWhatsapp /> WHATSAPP US
                            </Button>
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CustomContactComponent;
