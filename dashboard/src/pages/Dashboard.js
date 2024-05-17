import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/RestaurantMenu';
import AboutIcon from '@mui/icons-material/Info';
import LocationIcon from '@mui/icons-material/LocationOn';
import SocialMediaIcon from '@mui/icons-material/Group';

function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h1" align="center" gutterBottom style={{ fontFamily: 'Poppins, sans-serif', color: '#FF5733', fontSize: '32px', fontWeight: 700 }}>Welcome to CHIK HEN JHOE's Dashboard!</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <Link to="/menu" className="no-underline">
            <Paper elevation={3} className="p-4 text-center" style={{ backgroundColor: '#FF5733', color: 'white' }}>
              <MenuIcon sx={{ fontSize: 80 }} style={{ color: 'white' }} />
              <Typography variant="h2" className="my-4" style={{ fontSize: '24px', fontWeight: 700 }}>View Menu</Typography>
              <Typography variant="body1" style={{ fontSize: '16px' }}>Explore our mouth-watering dishes and beverages.</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Link to="/about" className="no-underline">
            <Paper elevation={3} className="p-4 text-center" style={{ backgroundColor: '#FFD700', color: '#333', border: '2px solid #FFD700' }}>
              <AboutIcon sx={{ fontSize: 80 }} />
              <Typography variant="h2" className="my-4" style={{ fontSize: '24px', fontWeight: 700 }}>About Us</Typography>
              <Typography variant="body1" style={{ fontSize: '16px' }}>Learn more about our story, values, and mission.</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Link to="/location" className="no-underline">
            <Paper elevation={3} className="p-4 text-center" style={{ backgroundColor: '#FF5733', color: 'white', border: '2px solid #FF5733' }}>
              <LocationIcon sx={{ fontSize: 80 }} style={{ color: 'white' }} />
              <Typography variant="h2" className="my-4" style={{ fontSize: '24px', fontWeight: 700 }}>Find Locations</Typography>
              <Typography variant="body1" style={{ fontSize: '16px' }}>Locate our restaurants near you and plan your visit.</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Link to="/socialmedia" className="no-underline">
            <Paper elevation={3} className="p-4 text-center" style={{ backgroundColor: '#FFD700', color: '#333', border: '2px solid #FFD700' }}>
              <SocialMediaIcon sx={{ fontSize: 80 }} />
              <Typography variant="h2" className="my-4" style={{ fontSize: '24px', fontWeight: 700 }}>Connect on Social Media</Typography>
              <Typography variant="body1" style={{ fontSize: '16px' }}>Follow us on social media for updates, promotions, and more.</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
