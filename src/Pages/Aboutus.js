import React from 'react';
import { Container, Grid, Typography, Box, Button, Card, CardContent, CardMedia } from '@mui/material';
import teamImage1 from '../assets/images/card1.jpg';
import teamImage2 from '../assets/images/card2.jpg';
import teamImage3 from '../assets/images/card3.jpg';

const AboutUsPage = () => {
  return (
    <div>
      <Box
        sx={{
          height: '50vh',
          background: `gray`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', letterSpacing: '2px' }}>
          About Us
        </Typography>
        <Typography variant="h6" sx={{ marginTop: '1rem', maxWidth: '700px', margin: 'auto' }}>
          We are a passionate team dedicated to delivering exceptional services and creating impactful solutions for our clients.
        </Typography>
      </Box>

      {/* About Us Content Section */}
      <Container maxWidth="lg" sx={{ padding: '4rem 0' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to provide top-quality services with exceptional customer experience. We aim to empower businesses and individuals with innovative solutions, ensuring efficiency, growth, and satisfaction.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              Our vision is to be a global leader in our industry, delivering excellence in everything we do. We aspire to be the preferred partner for businesses seeking innovation, reliability, and long-term success.
            </Typography>
          </Grid>
        </Grid>

        {/* Team Section */}
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '4rem' }}>
          Meet Our Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '12px', boxShadow: 6, textAlign: 'center' }}>
              <CardMedia
                component="img"
                alt="Team Member 1"
                height="250"
                image={teamImage1}
                sx={{
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  John Doe
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  CEO & Founder
                </Typography>
                <Typography variant="body1" paragraph sx={{ marginTop: '1rem' }}>
                  John is the visionary behind the company, with over 20 years of experience in the industry.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '12px', boxShadow: 6, textAlign: 'center' }}>
              <CardMedia
                component="img"
                alt="Team Member 2"
                height="250"
                image={teamImage2}
                sx={{
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Jane Smith
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Chief Operating Officer
                </Typography>
                <Typography variant="body1" paragraph sx={{ marginTop: '1rem' }}>
                  Jane ensures smooth operations and is instrumental in overseeing the day-to-day activities of the company.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '12px', boxShadow: 6, textAlign: 'center' }}>
              <CardMedia
                component="img"
                alt="Team Member 3"
                height="250"
                image={teamImage3}
                sx={{
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Michael Lee
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Chief Technology Officer
                </Typography>
                <Typography variant="body1" paragraph sx={{ marginTop: '1rem' }}>
                  Michael leads the technology division and drives the innovation behind our products and services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Call to Action Section */}
        <Box sx={{ textAlign: 'center', marginTop: '4rem' }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
            Join Us in Our Journey
          </Typography>
          <Typography variant="body1" paragraph>
            We’re always looking for talented individuals to join our team and help us make an impact in the industry.
          </Typography>
          <Button variant="contained" color="primary" size="large" href="#contact" sx={{ borderRadius: '8px' }}>
            Contact Us Today
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default AboutUsPage;
