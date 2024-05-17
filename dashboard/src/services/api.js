import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Attach token to request headers if it exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Menu Item API calls
export const fetchMenuItems = () => API.get('/menu');
export const createMenuItem = (newItem) => API.post('/menu', newItem);
export const updateMenuItem = (id, updatedItem) => API.put(`/menu/${id}`, updatedItem);
export const deleteMenuItem = (id) => API.delete(`/menu/${id}`);

// Authentication API call
export const loginUser = (formData) => API.post('/auth/login', formData);
