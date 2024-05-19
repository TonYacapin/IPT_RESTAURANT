import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia, Button, Modal, Fade } from '@mui/material';
import RestaurantFront from '../logo/RestaurantFront.jpg';  
import RestoTarp from '../logo/RestoTarp.jpg';  

const About = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (content) => {
    setModalContent(content);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ backgroundColor: '#FFD700', minHeight: '89.8vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ color: '#FF5733', fontWeight: 700, mb: 4, textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: '32px' }}>
          About Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <CardMedia
                component="img"
                image={RestaurantFront}
                alt="Restaurant Front"
                sx={{ height: '200px' }} // Set a fixed height for the image
              />
              <CardContent>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                  Welcome to Our Restaurant
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Located in the heart of Nueva Vizcaya, we pride ourselves on offering a unique dining experience. Our commitment to using the freshest ingredients and traditional cooking methods sets us apart.
                </Typography>
                <Button onClick={() => handleOpenModal('Our Story')} variant="contained" sx={{ backgroundColor: '#FF5733', color: 'white', border: '2px solid #FF5733', fontWeight: 700 }}>
                  Read Our Story
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <CardMedia
                component="img"
                image={RestoTarp}
                alt="Restaurant Tarp"
                sx={{ height: '200px' }} // Set a fixed height for the image
              />
              <CardContent>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                  Explore Our Menu
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  At our restaurant, every meal is crafted with care. Our menu features a wide variety of options, from traditional favorites to innovative new dishes, all designed to delight your taste buds.
                </Typography>
                <Button onClick={() => handleOpenModal('Our Menu')} variant="contained" sx={{ backgroundColor: '#FFD700', color: '#333', border: '2px solid #FFD700', fontWeight: 700 }}>
                  View Our Menu
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          closeAfterTransition
          BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Fade in={openModal}>
            <Box sx={{ backgroundColor: '#FFF', width: '50%', p: 4, mx: 'auto' }}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                {modalContent}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {modalContent === 'Our Story' ? (
                  <>
                    Welcome to our restaurant! Our story began in [Year] when our founder, [Founder], envisioned a cozy place where families and friends could come together to enjoy great food. From our humble beginnings, we have grown into a beloved local eatery, known for our warm atmosphere and delicious dishes.
                  </>
                ) : modalContent === 'Our Menu' ? (
                  <>
                    Check out our mouthwatering menu featuring a wide range of dishes made from the freshest ingredients. Whether you're craving classic comfort food or daring culinary creations, we have something to satisfy every palate.
                  </>
                ) : null}
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </Container>
    </Box>
  );
};

export default About;
