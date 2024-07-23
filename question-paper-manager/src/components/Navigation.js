// src/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuth } from '../AuthContext';


const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Question Paper Manager
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/question-papers">Question Papers</Button>
        {user && (user.role === 'teacher' || user.role === 'admin') && (
          <Button color="inherit" component={Link} to="/upload">Upload</Button>
        )}
        {user && user.role === 'admin' && (
          <Button color="inherit" component={Link} to="/user-management">User Management</Button>
        )}
        {user ? (
          <Button color="inherit" onClick={logout}>Logout</Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
