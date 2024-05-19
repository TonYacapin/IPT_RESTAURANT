import React, { useState, useEffect } from 'react';
import { fetchMenuItems } from '../services/api';
import MenuItem from '../components/MenuItem';
import { Modal, Box, Typography, Grid, CircularProgress } from '@mui/material';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const { data } = await fetchMenuItems();
        setMenuItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching menu items', error);
      }
    };
    getMenuItems();
  }, []);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h3"
        sx={{
          color: '#FF5733',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '700',
          mb: 4,
          textAlign: 'center',
        }}
      >
        Menu
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress sx={{ color: '#FF5733' }} />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {menuItems.map((item) => (
            <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
              <Box
                onClick={() => handleOpenModal(item)}
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <MenuItem item={item} />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedItem && (
            <>
              <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                {selectedItem.name}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedItem.description}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Price: ₱{selectedItem.price}
              </Typography>
              {selectedItem.image && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={selectedItem.image} alt={selectedItem.name} style={{ maxWidth: '100%' }} />
                </Box>
              )}
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Menu;
