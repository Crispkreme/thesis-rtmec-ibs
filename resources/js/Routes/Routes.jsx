import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';

const AppRoutes = () => {
  const apiUrl = window.env.API_BASE_URL;

  return (
    <Router>
      <Route path='/' element={<div>API URL: {apiUrl}</div>} />
    </Router>
  );
}

export default AppRoutes;
