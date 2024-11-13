// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const BattriesFooter = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Battery Solutions. All Rights Reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        {' | '}
        <Link href="#" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default BattriesFooter;
