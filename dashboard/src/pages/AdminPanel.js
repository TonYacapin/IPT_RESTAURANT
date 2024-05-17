import React, { useState, useEffect } from 'react';
import { createMenuItem, updateMenuItem, deleteMenuItem, fetchMenuItems } from '../services/api';
import { Button, Paper, Typography, IconButton } from '@mui/material';
import { AddCircleOutline as AddIcon, DeleteOutline as DeleteIcon, EditOutlined as EditIcon } from '@mui/icons-material';

const AdminPanel = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [currentItem, setCurrentItem] = useState({ name: '', description: '', price: '', image: '' });
    const [imageData, setImageData] = useState(null);
    const [imagePreview, setImagePreview] = useState(null); // State for image preview

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
            const newItem = {
                name: currentItem.name,
                description: currentItem.description,
                price: currentItem.price,
                image: null // Initialize image as null for now
            };

            if (imageData) {
                const base64Image = await convertImageToBase64(imageData);
                newItem.image = base64Image;
            } else {
                newItem.image = currentItem.image; // Use the existing image if a new one is not provided
            }

            if (currentItem._id) {
                await updateMenuItem(currentItem._id, newItem);
            } else {
                await createMenuItem(newItem);
            }

            const { data } = await fetchMenuItems();
            setMenuItems(data);
            setCurrentItem({ name: '', description: '', price: '', image: '' });
            setImageData(null);
            setImagePreview(null); // Clear image preview after submission
        } catch (error) {
            console.error('Error saving menu item', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageData(file);
        // Generate image preview
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

    // Function to convert image file to base64 string
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
        setImagePreview(item.image); // Set image preview to the current item's image
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
                <form onSubmit={handleSubmit} className="mb-8" encType="multipart/form-data">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={currentItem.name}
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                value={currentItem.description}
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                value={currentItem.price}
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={handleImageChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                accept="image/*"
                                required={!currentItem._id} // Make image field required only for new items
                            />
                        </div>
                    </div>
                    {imagePreview && (
                        <div className="mt-4">
                            <img src={imagePreview} alt="Preview" className="max-w-xs" />
                        </div>
                    )}
                    <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button>
                </form>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {menuItems.map(item => (
                        <div key={item._id} className="flex flex-col h-full">
                            <Paper elevation={3} className="p-4 flex-grow">
                                <Typography variant="h5" className="mb-2">{item.name}</Typography>
                                <Typography variant="body1" className="mb-2">{item.description}</Typography>
                                <Typography variant="body1" className="mb-2">₱{item.price}</Typography>
                                <div className="max-w-xs h-40 overflow-hidden">
                                    <img src={item.image} alt={item.name} className="h-full w-auto" />
                                </div>
                            </Paper>
                            <div className="flex mt-2">
                                <IconButton onClick={() => handleEdit(item)} className="mr-2" aria-label="Edit">
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(item._id)} aria-label="Delete" color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                    ))}
                </div>
            </Paper>
        </div>
    );
};

export default AdminPanel;
