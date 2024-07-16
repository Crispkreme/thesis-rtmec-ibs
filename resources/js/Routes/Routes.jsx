import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  const apiUrl = window.env.API_BASE_URL;

  return (
    <Routes>
      <Route path='/' element={<div>API URL: {apiUrl}</div>} />
    </Routes>
  );
}

export default AppRoutes;
