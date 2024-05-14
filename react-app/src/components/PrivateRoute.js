import React from 'react';
import { Navigate } from 'react-router-dom';
import words from '../words';

const PrivateRoute = ({ Component }) => {
  const token = localStorage.getItem('token')
  const isAuthenticated = token ? true : false
  console.log(Component)

  return (
    isAuthenticated ?
        Component
    : (
        <Navigate to={words.routes.admin.login} />
    )
  );
};

export default PrivateRoute;