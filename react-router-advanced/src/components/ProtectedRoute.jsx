import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the passed element (the protected route)
  return element;
};

export default ProtectedRoute;
