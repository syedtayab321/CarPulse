import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import aboutImage from './../../assets/images/battery1.jpg';
import './../css/batteryAbout.css';
const BattriesAboutUs = () => {
  return (
    <Box className="battery-about-section">
      <Container className="about-container">
        <Row>
          <Col md={6} className="about-content">
            <Typography variant="h4" className="about-title" fontWeight="bold" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              We are a trusted supplier and buyer of batteries with a commitment to quality and sustainability.
              Our mission is to provide high-quality battery solutions for a wide range of applications, from personal
              vehicles to industrial machines. With years of experience and a dedicated team, we ensure that you get the
              best products and services.
            </Typography>
          </Col>
          <Col md={6} className="about-image-container">
            <img src={aboutImage} alt="About Us - Batteries" className="about-image" />
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default BattriesAboutUs;
