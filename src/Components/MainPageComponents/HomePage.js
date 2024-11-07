import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from React Router
import images1 from './../../assets/images/card1.jpg';
import images2 from './../../assets/images/card2.jpg';
import images3 from './../../assets/images/card3.jpg';

const services = [
  {
    title: 'Car Service',
    description: 'High-quality car servicing',
    image: images1,
    color: '#FFE0B2',
    link: '/serviceDetails'
  },
  {
    title: 'Mobile Service',
    description: 'Quick mobile repair',
    image: images2,
    color: '#E0F7FA',
    link: '/serviceDetails'
  },
  {
    title: 'Car Repair',
    description: 'Affordable car repairs',
    image: images3,
    color: '#FFECB3',
    link: '/car-repair'
  },
  {
    title: 'Plumbing',
    description: 'Efficient plumbing solutions',
    image: images3,
    color: '#C8E6C9',
    link: '/plumbing'
  },
  {
    title: 'Electrical Work',
    description: 'Safe electrical installations',
    image: images1,
    color: '#B3E5FC',
    link: '/electrical-work'
  },
  {
    title: 'Pest Control',
    description: 'Comprehensive pest control',
    image: images2,
    color: '#F0F4C3',
    link: '/pest-control'
  },
];

const HomePage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>

      {/* Left Section */}
      <Box sx={{ flex: 1, mb: { xs: 4, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ textAlign: 'center' }}>
          Welcome to Our Services
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
          Quality You Can Trust
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'center' }}>
          We provide a range of quality services tailored to meet your needs. Experience the best with us.
        </Typography>

        {/* Countdown */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
          {Object.keys(timeLeft).map((unit) => (
            <Box key={unit} sx={{ textAlign: 'center', border: '1px solid', borderRadius: 1, padding: 1 }}>
              <Typography variant="h6">{timeLeft[unit] || '0'}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button variant="contained" color="primary" size="large" sx={{ display: 'block', mx: 'auto' }}>
          Book Now
        </Button>
      </Box>

      {/* Right Section - Services */}
      <Box sx={{ flex: 1 }}>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={service.link} style={{ textDecoration: 'none' }}>
                <Card
                  elevation={2}
                  sx={{
                    borderRadius: 2,
                    height: '190px',
                    backgroundColor: service.color,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 5px 10px rgba(0,0,0,0.1)' },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="120"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent sx={{ padding: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: '12px' }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
