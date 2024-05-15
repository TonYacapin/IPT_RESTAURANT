import React, { useState, useEffect } from 'react';
import { createMenuItem, updateMenuItem, deleteMenuItem, fetchMenuItems } from '../services/api';
import { Button, Grid, Paper, Typography, TextField } from '@mui/material'; // Import TextField directly from '@mui/material'

const AdminPanel = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ name: '', description: '', price: '', image: '' });

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const { data } = await fetchMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items', error);
      }
    };
    getMenuItems();
  }, []);

  const handleChange = (e) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentItem._id) {
        await updateMenuItem(currentItem._id, currentItem);
      } else {
        await createMenuItem(currentItem);
      }
      const { data } = await fetchMenuItems();
      setMenuItems(data);
      setCurrentItem({ name: '', description: '', price: '', image: '' });
    } catch (error) {
      console.error('Error saving menu item', error);
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleDelete = async (id) => {
    try {
      await deleteMenuItem(id);
      const { data } = await fetchMenuItems();
      setMenuItems(data);
    } catch (error) {
      console.error('Error deleting menu item', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Paper elevation={3} className="p-4">
        <Typography variant="h3" className="mb-4">Admin Panel</Typography>
        <form onSubmit={handleSubmit} className="mb-8">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                name="name"
                value={currentItem.name}
                onChange={handleChange}
                label="Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="description"
                value={currentItem.description}
                onChange={handleChange}
                label="Description"
                multiline
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="number"
                name="price"
                value={currentItem.price}
                onChange={handleChange}
                label="Price"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                name="image"
                value={currentItem.image}
                onChange={handleChange}
                label="Image URL"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" className="mt-4">Save</Button>
        </form>
        <div>
          {menuItems.map(item => (
            <Paper key={item._id} elevation={3} className="p-4 mb-4">
              <Typography variant="h5" className="mb-2">{item.name}</Typography>
              <Typography variant="body1" className="mb-2">{item.description}</Typography>
              <Typography variant="body1" className="mb-2">${item.price}</Typography>
              <img src={item.image} alt={item.name} className="max-w-xs" />
              <Button onClick={() => handleEdit(item)} variant="outlined" className="mr-2">Edit</Button>
              <Button onClick={() => handleDelete(item._id)} variant="outlined" color="error">Delete</Button>
            </Paper>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default AdminPanel;
