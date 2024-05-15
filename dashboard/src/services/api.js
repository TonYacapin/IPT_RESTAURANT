import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchMenuItems = () => API.get('/menu');

export const createMenuItem = (newItem) => API.post('/menu', newItem);

export const updateMenuItem = (id, updatedItem) => API.put(`/menu/${id}`, updatedItem);

export const deleteMenuItem = (id) => API.delete(`/menu/${id}`);
