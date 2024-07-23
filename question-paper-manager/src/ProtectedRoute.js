// src/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      element={
        user && allowedRoles.includes(user.role) ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
