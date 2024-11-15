import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchServicesData } from '../../BackendFunctions/FetchServices';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import BuildIcon from '@mui/icons-material/Build';
import RecyclingIcon from '@mui/icons-material/Recycling';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import EvStationIcon from '@mui/icons-material/EvStation';
import ConstructionIcon from '@mui/icons-material/Construction';
import CarRepairIcon from '@mui/icons-material/CarRepair';

const iconMapping = {
  battery: <BatteryChargingFullIcon sx={{ fontSize: 68, color: 'white' }} />,
  service: <BuildIcon sx={{ fontSize: 68, color: 'white' }} />,
  recycling: <RecyclingIcon sx={{ fontSize: 68, color: 'white' }} />,
  carService: <DirectionsCarIcon sx={{ fontSize: 68, color: 'white' }} />,
  build: <BuildCircleIcon sx={{ fontSize: 68, color: 'white' }} />,
  evStation: <EvStationIcon sx={{ fontSize: 68, color: 'white' }} />,
  repair: <CarRepairIcon sx={{ fontSize: 68, color: 'white' }} />,
  construction: <ConstructionIcon sx={{ fontSize: 68, color: 'white' }} />,
};

const dummyData = [
  { description: 'High-quality Road Side Assistance', link: '/roadsideAssistant', color: '#4caf50', iconType: 'carService' },
  { description: 'Best Mobile Auto services', link: '/mobileCarService', color: '#ff9800', iconType: 'service' },
  { description: 'Expert Car Detailing Services', link: '/carDetailing', color: '#2196f3', iconType: 'carService' },
  { description: 'Expert Car Contracts', link: '/carContract', color: '#f44336', iconType: 'build' },
  { description: 'Expert Car Renewal Services', link: '/carRenewal', color: '#ff9800', iconType: 'evStation' },
  { description: 'Expert Car Repair Services', link: '/carRepair', color: '#2196f3', iconType: 'repair' },
  { description: 'Environment-friendly Car Services', link: '/serviceDetails', color: '#4caf50', iconType: 'recycling' },
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

  const [services, setServices] = useState([]);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const loadServicesData = async () => {
      const data = await fetchServicesData();
      const combinedData = data.map((item, index) => ({
        title: item.title,
        iconType: dummyData[index % dummyData.length].iconType,  // Map iconType from dummyData
        ...dummyData[index % dummyData.length],
      }));
      setServices(combinedData);
    };
    loadServicesData();

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Box sx={{ padding: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Left Section - Welcome and Countdown */}
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

          {/* Countdown Timer */}
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
        </Box>

        {/* Right Section - Services Cards */}
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
                    }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                      {iconMapping[service.iconType]}
                    </Box>
                    <CardContent sx={{ padding: 1, color: 'white' }}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ fontSize: '12px', color: 'white' }}>
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
    </>
  );
};

export default HomePage;
