import React, { useState, useEffect } from 'react';
import { Button, Typography, IconButton, Paper, Grid, TextField, Avatar, Box, CircularProgress, Modal, Fade } from '@mui/material';
import { DeleteOutline as DeleteIcon, EditOutlined as EditIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { createMenuItem, updateMenuItem, deleteMenuItem, fetchMenuItems } from '../services/api';

const AdminPanel = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [currentItem, setCurrentItem] = useState({ name: '', description: '', price: '', image: '' });
    const [imageData, setImageData] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false); // State for modal
    const [selectedItem, setSelectedItem] = useState(null); // State for selected item in modal
    const [deleteModalOpen, setDeleteModalOpen] = useState(false); // State for delete confirmation modal
    const [itemToDelete, setItemToDelete] = useState(null); // State for item to delete
    const navigate = useNavigate();

    useEffect(() => {
        fetchMenuItemsData();
    }, []);

    const fetchMenuItemsData = async () => {
        try {
            const { data } = await fetchMenuItems();
            setMenuItems(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching menu items', error);
        }
    };

    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newItem = {
                name: currentItem.name,
                description: currentItem.description,
                price: currentItem.price,
                image: null
            };

            if (imageData) {
                const base64Image = await convertImageToBase64(imageData);
                newItem.image = base64Image;
            } else {
                newItem.image = currentItem.image;
            }

            if (currentItem._id) {
                await updateMenuItem(currentItem._id, newItem);
            } else {
                await createMenuItem(newItem);
            }

            fetchMenuItemsData();
            setCurrentItem({ name: '', description: '', price: '', image: '' });
            setImageData(null);
            setImagePreview(null);
        } catch (error) {
            console.error('Error saving menu item', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageData(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const convertImageToBase64 = (imageFile) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
        setImagePreview(item.image);
    };

    const handleDelete = (id) => {
        const item = menuItems.find(item => item._id === id);
        if (item) {
            setItemToDelete(item);
            setDeleteModalOpen(true);
        }
    };

    const handleConfirmDelete = async () => {
        try {
            await deleteMenuItem(itemToDelete._id);
            fetchMenuItemsData();
            setDeleteModalOpen(false);
        } catch (error) {
            console.error('Error deleting menu item', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setOpen(false);
    };

    const handleOpenDeleteModal = (item) => {
        setItemToDelete(item);
        setDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setItemToDelete(null);
        setDeleteModalOpen(false);
    };

    return (
        <Box display="flex" justifyContent="center" mt={4}>
            <Paper elevation={3} className="p-4" style={{ backgroundColor: '#FFFFFF', width: '80%' }}>
                <div className="flex justify-between items-center mb-4">
                    <Typography variant="h3" style={{ color: '#FF5733' }}>Admin Panel</Typography>
                    <IconButton onClick={handleLogout} color="primary" aria-label="logout">
                        <ExitToAppIcon style={{ color: '#FF5733' }} />
                    </IconButton>
                </div>
                {!open && (
                    <Paper elevation={3} className="p-4 mt-4" style={{ backgroundColor: '#FFFFFF' }}>
                        <Typography variant="h5" className="mb-5">Edit Item</Typography>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <Grid container spacing={3}>
                                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                                    <TextField
                                        label="Name"
                                        name="name"
                                        value={currentItem.name}
                                        onChange={handleChange}
                                        fullWidth
                                        size="large"
                                        required
                                        className="mb-3"
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                                    <TextField
                                        label="Description"
                                        name="description"
                                        value={currentItem.description}
                                        onChange={handleChange}
                                        fullWidth
                                        size="large"
                                        required
                                        className="mb-3"
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                                    <TextField
                                        label="Price"
                                        name="price"
                                        type="number"
                                        value={currentItem.price}
                                        onChange={handleChange}
                                        fullWidth
                                        size="large"
                                        required
                                        className="mb-3"
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        accept="image/*"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        onChange={handleImageChange}
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" component="span" size="large" style={{ backgroundColor: '#FF5733', color: '#FFFFFF', marginBottom: '1rem' }}>
                                            Upload Image
                                        </Button>
                                    </label>
                                </Grid>
                            </Grid>
                            {imagePreview && (
                                <div className="mb-3">
                                    <Avatar alt="Preview" src={imagePreview} sx={{ width: 100, height: 100, borderRadius: '5px', marginBottom: '1rem' }} />
                                </div>
                            )}
                            <Button type="submit" variant="contained" color="primary" size="large" style={{ backgroundColor: '#FF5733', color: '#FFFFFF', textTransform: 'none', fontSize: '16px', fontWeight: '700', borderRadius: '5px' }}>
                                Save
                            </Button>
                        </form>
                    </Paper>
                )}
                {loading ? (
                    <Box display="flex" justifyContent="center" mt={4}>
                        <CircularProgress color="primary" />
                    </Box>
                ) : (
                    <Grid container spacing={3}>
                        {menuItems.map(item => (
                            <Grid item key={item._id} xs={12} sm={6} md={4}>
                                <Paper elevation={3} className="p-4" style={{ backgroundColor: '#FFFFFF', padding: '2rem' }}>
                                    <Typography variant="h5" className="mb-2" style={{ color: '#FF5733', fontSize: '20px', fontWeight: 700 }}>{item.name}</Typography>
                                    <Avatar alt={item.name} src={item.image} sx={{ width: 100, height: 100, marginBottom: '1rem', borderRadius: '5px' }} />
                                    <div className="flex mt-2">
                                        <IconButton onClick={() => handleEdit(item)} className="mr-2" aria-label="Edit">
                                            <EditIcon style={{ color: '#FF5733' }} />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(item._id)} aria-label="Delete" color="error">
                                            <DeleteIcon style={{ color: '#FF5733' }} />
                                        </IconButton>
                                        <Button onClick={() => handleOpenModal(item)} variant="outlined" color="primary" style={{ borderColor: '#FF5733', color: '#FF5733', textTransform: 'none', fontSize: '16px', fontWeight: '700', borderRadius: '5px' }}>
                                            Show Info
                                        </Button>
                                    </div>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                )}
                <Modal
                    open={open}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Fade in={open}>
                        <Box sx={{
                            backgroundColor: '#FFFFFF',
                            boxShadow: 24,
                            padding: '2rem',
                            borderRadius: '10px',
                            width: '400px',
                            textAlign: 'center'
                        }}>
                            <Typography id="modal-modal-title" variant="h5" style={{ color: '#FF5733', fontSize: '20px', fontWeight: 700 }}>{selectedItem && selectedItem.name}</Typography>
                            <Typography id="modal-modal-description" variant="body1" style={{ color: '#333', fontSize: '16px', fontWeight: 400 }}>Price: {selectedItem && `₱${selectedItem.price}`}</Typography>
                            <Typography id="modal-modal-description" variant="body1" style={{ color: '#333', fontSize: '16px', fontWeight: 400 }}>Description: {selectedItem && selectedItem.description}</Typography>
                        </Box>
                    </Fade>
                </Modal>
                <Modal
                    open={deleteModalOpen}
                    onClose={handleCloseDeleteModal}
                    aria-labelledby="delete-modal-title"
                    aria-describedby="delete-modal-description"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Fade in={deleteModalOpen}>
                        <Box sx={{
                            backgroundColor: '#FFFFFF',
                            boxShadow: 24,
                            padding: '2rem',
                            borderRadius: '10px',
                            width: '400px',
                            textAlign: 'center'
                        }}>
                            <Typography variant="h5" style={{ color: '#FF5733', fontSize: '20px', fontWeight: 700 }}>Confirm Deletion</Typography>
                            <Typography variant="body1" style={{ color: '#333', fontSize: '16px', fontWeight: 400 }}>
                                Are you sure you want to delete {itemToDelete && itemToDelete.name}?
                            </Typography>
                            <div style={{ marginTop: '1rem' }}>
                                <Button onClick={handleCloseDeleteModal} variant="outlined" color="primary" style={{ marginRight: '1rem' }}>
                                    Cancel
                                </Button>
                                <Button onClick={handleConfirmDelete} variant="contained" color="primary">
                                    Delete
                                </Button>
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            </Paper>
        </Box>
    );
};

export default AdminPanel;
