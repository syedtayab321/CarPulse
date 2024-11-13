import React from 'react';
import { Container } from 'react-bootstrap';
import { Typography } from '@mui/material';
import './../css/HeroSection.css';

const BattriesHeroSection = () => {
  return (
    <div className="battery-hero">
      <Container>
        <Typography variant="h2" component="h1" className="mb-4">
          Reliable Battery Solutions
        </Typography>
        <Typography variant="h5" component="h2">
          Buy, Sell, and Get the Best Battery Services
        </Typography>
      </Container>
    </div>
  );
};

export default BattriesHeroSection;
