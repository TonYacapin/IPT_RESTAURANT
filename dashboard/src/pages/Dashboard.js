import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Paper, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/RestaurantMenu';
import AboutIcon from '@mui/icons-material/Info';
import LocationIcon from '@mui/icons-material/LocationOn';
import SocialMediaIcon from '@mui/icons-material/Group';

const Dashboard = () => {
  return (
    <Box sx={{ fontFamily: 'Poppins, sans-serif', padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        sx={{ color: '#FF5733', fontSize: '32px', fontWeight: 700 }}
      >
        Welcome to CHIK HEN JHOE's Dashboard!
      </Typography>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ color: '#333', fontSize: '24px', fontWeight: 500, marginBottom: '2rem' }}
      >
        Experience the best flavors and a cozy atmosphere at our restaurant.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <Link to="/menu" style={{ textDecoration: 'none' }}>
            <Paper
              elevation={3}
              sx={{
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: '#FF5733',
                color: 'white',
                borderRadius: '10px',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <MenuIcon sx={{ fontSize: 80 }} />
              <Typography variant="h2" sx={{ fontSize: '24px', fontWeight: 700, margin: '1rem 0' }}>
                View Menu
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '16px', marginBottom: '1rem' }}>
                Explore our mouth-watering dishes and beverages.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'white', color: '#FF5733', fontWeight: 700, '&:hover': { backgroundColor: '#FFD700', color: '#333' } }}
              >
                Discover More
              </Button>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Paper
              elevation={3}
              sx={{
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: '#FFD700',
                color: '#333',
                borderRadius: '10px',
                border: '2px solid #FFD700',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <AboutIcon sx={{ fontSize: 80 }} />
              <Typography variant="h2" sx={{ fontSize: '24px', fontWeight: 700, margin: '1rem 0' }}>
                About Us
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '16px', marginBottom: '1rem' }}>
                Learn more about our story, values, and mission.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#FF5733', color: 'white', fontWeight: 700, '&:hover': { backgroundColor: '#FFD700', color: '#333' } }}
              >
                Read Our Story
              </Button>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Link to="/location" style={{ textDecoration: 'none' }}>
            <Paper
              elevation={3}
              sx={{
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: '#FF5733',
                color: 'white',
                borderRadius: '10px',
                border: '2px solid #FF5733',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <LocationIcon sx={{ fontSize: 80 }} />
              <Typography variant="h2" sx={{ fontSize: '24px', fontWeight: 700, margin: '1rem 0' }}>
                Our Location
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '16px', marginBottom: '1rem' }}>
                Locate our restaurant and plan your visit.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'white', color: '#FF5733', fontWeight: 700, '&:hover': { backgroundColor: '#FFD700', color: '#333' } }}
              >
                Locate Us
              </Button>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Link to="/socialmedia" style={{ textDecoration: 'none' }}>
            <Paper
              elevation={3}
              sx={{
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: '#FFD700',
                color: '#333',
                borderRadius: '10px',
                border: '2px solid #FFD700',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <SocialMediaIcon sx={{ fontSize: 80 }} />
              <Typography variant="h2" sx={{ fontSize: '24px', fontWeight: 700, margin: '1rem 0' }}>
                Connect on Social Media
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '16px', marginBottom: '1rem' }}>
                Follow us on social media for updates, promotions, and more.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#FF5733', color: 'white', fontWeight: 700, '&:hover': { backgroundColor: '#FFD700', color: '#333' } }}
              >
                Follow Us
              </Button>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
