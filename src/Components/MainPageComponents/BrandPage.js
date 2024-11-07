import React from 'react';
import { Container, Grid, Typography, Card, Box, CardMedia, Button } from '@mui/material';
import image1 from './../../assets/brandlogos/ford.jpg';
import image2 from './../../assets/brandlogos/civic.png';
import image3 from './../../assets/brandlogos/honda.png';
import image4 from './../../assets/brandlogos/toyota.png';
const BrandsPage = () => {
  const brands = [
    { name: 'Toyota', image: image1 },
    { name: 'Honda', image: image2 },
    { name: 'BMW', image: image3 },
    { name: 'Mercedes', image: image4 },
    { name: 'Audi', image: image3 },
    { name: 'Ford', image: image4 },
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold', letterSpacing: '2px' }}>
        Brands We Service & Repair
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {brands.map((brand, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: '12px',
                boxShadow: 6,
                background: 'linear-gradient(to bottom right, #2980b9, #8e44ad)',
                '&:hover': {
                  boxShadow: 15,
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                },
              }}
            >
              <CardMedia
                component="img"
                alt={brand.name}
                height="200"
                image={brand.image}
                sx={{
                  objectFit: 'cover',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.1)' },
                }}
              />
              <Box sx={{ padding: '1rem', textAlign: 'center' }}>
                <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>
                  {brand.name}
                </Typography>
                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{
                    marginTop: '1rem',
                    borderRadius: '8px',
                    color: '#fff',
                    borderColor: '#fff',
                    '&:hover': { borderColor: '#2980b9', color: '#2980b9' },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: '4rem' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
          We Service All Major Car Brands
        </Typography>
        <Button variant="contained" color="primary" size="large" href="#contact" sx={{ borderRadius: '8px' }}>
          Contact Us for Your Service Needs
        </Button>
      </Box>
    </Container>
  );
};

export default BrandsPage;
