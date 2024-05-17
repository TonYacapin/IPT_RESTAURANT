import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const AdminRoute = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return <Outlet />;
};

export default AdminRoute;
