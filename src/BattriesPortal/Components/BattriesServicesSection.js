import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faRecycle, faHandHoldingUsd, faTools } from '@fortawesome/free-solid-svg-icons';
import './../css/batteryServices.css';

const services = [
  { title: 'Battery Sales', description: 'High-quality batteries for all types of vehicles.', icon: faBatteryFull },
  { title: 'Battery Purchase', description: 'We buy old batteries at the best prices.', icon: faHandHoldingUsd },
  { title: 'Battery Installation', description: 'Expert installation services to ensure safety and efficiency.', icon: faTools },
  { title: 'Battery Recycling', description: 'Environment-friendly battery recycling options.', icon: faRecycle },
];

const BattriesServices = () => {
  return (
    <Box className="battery-services-section">
      <Typography variant="h4" className="services-title">
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="service-card">
              <CardContent>
                <Box className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </Box>
                <Typography variant="h6" className="service-title" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" className="service-description">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BattriesServices;
