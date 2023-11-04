import React from 'react';
import { Navigate } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <Navigate to="/" />
    </div>
  );
}

export default NotFound;
