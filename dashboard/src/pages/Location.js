import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

const Location = () => {
  return (
    <Box sx={{ backgroundColor: '#FFD700', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            color: '#FF5733',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '32px',
            fontWeight: '700',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Our Location
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            mb: 4,
            textAlign: 'center',
          }}
        >
          We are located at Bayombong, Nueva Vizcaya. Visit us to experience the best dining experience!
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ position: 'relative', paddingTop: '56.25%', height: '100%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122482.03722659126!2d121.0390131!3d16.3961751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390455feea21eb9%3A0xb321e38ed5b6c3f7!2sChik%20Hen%20Jhoe%20Grill%20%26%20Restaurant!5e0!3m2!1sen!2sph!4v1715746278231!5m2!1sen!2sph" 
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Restaurant Location"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Location;
