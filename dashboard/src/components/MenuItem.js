import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, Button, Collapse, Box } from '@mui/material';

const MenuItem = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  if (!item) return null;

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={item.name}
        sx={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', mb: 1 }}>
          {item.name}
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', color: '#FF5733', mb: 2 }}>
          ₱{item.price}
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#FF5733', color: '#FFFFFF', mb: 1 }}
          onClick={toggleDescription}
        >
          {showDescription ? 'Hide Description' : 'Show Description'}
        </Button>
        <Collapse in={showDescription}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', color: '#4A4A4A' }}>
              {item.description}
            </Typography>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default MenuItem;
