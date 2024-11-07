import React from 'react';
import { Container, Grid, Typography, Box, Card, Button, Divider } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

const ServicesDetailsPage = () => {
  const services = [
    {
      name: 'Basic Plan',
      price: '$19.99/month',
      features: ['Basic support', '1 GB Storage', 'Limited Access to Premium Features'],
      exclusions: ['No Priority Support', 'No Analytics'],
      description: 'Our basic plan is perfect for individuals looking to get started with essential features.',
      offer: 'Free 7-day trial!'
    },
    {
      name: 'Standard Plan',
      price: '$39.99/month',
      features: ['24/7 Support', '5 GB Storage', 'Advanced Analytics'],
      exclusions: ['Limited Customization', 'No Dedicated Account Manager'],
      description: 'A more advanced plan with additional features and support for growing businesses.',
      offer: 'Save 20% when you pay annually!'
    },
    {
      name: 'Premium Plan',
      price: '$79.99/month',
      features: ['Priority Support', '50 GB Storage', 'Full Access to Premium Features'],
      exclusions: ['No Additional Features'],
      description: 'For the ultimate experience with premium support and maximum flexibility.',
      offer: 'Includes free consultation for new users!'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: '4rem 0' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
        Our Services Plans
      </Typography>

      <Typography variant="h6" align="center" paragraph sx={{ color: '#7f8c8d' }}>
        Choose a plan that fits your needs. Each plan comes with a variety of features designed to help you grow and succeed.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: '12px', boxShadow: 6, padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2980b9', marginBottom: '1rem' }}>
                {service.name}
              </Typography>
              <Typography variant="h6" sx={{ color: '#27ae60', fontWeight: 'bold', marginBottom: '1rem' }}>
                {service.price}
              </Typography>

              <Divider sx={{ marginBottom: '1rem' }} />

              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                {service.description}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
                What’s Included:
              </Typography>
              <Box sx={{ textAlign: 'left', marginBottom: '1rem' }}>
                {service.features.map((feature, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <CheckCircle sx={{ color: '#2ecc71', marginRight: '1rem' }} />
                    <Typography variant="body1">{feature}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
                What’s Not Included:
              </Typography>
              <Box sx={{ textAlign: 'left', marginBottom: '1rem' }}>
                {service.exclusions.map((exclusion, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <Cancel sx={{ color: '#e74c3c', marginRight: '1rem' }} />
                    <Typography variant="body1">{exclusion}</Typography>
                  </Box>
                ))}
              </Box>

              {service.offer && (
                <Box sx={{ backgroundColor: '#f39c12', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                  <Typography variant="h6" sx={{ color: '#fff' }}>
                    Special Offer: {service.offer}
                  </Typography>
                </Box>
              )}

              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '1rem', borderRadius: '8px' }}
                fullWidth
              >
                Choose Plan
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: '4rem' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#2c3e50' }}>
          Have Questions? Need Custom Solutions?
        </Typography>
        <Button variant="contained" color="primary" size="large" href="#contact" sx={{ borderRadius: '8px' }}>
          Contact Us for Custom Plans
        </Button>
      </Box>
    </Container>
  );
};

export default ServicesDetailsPage;
