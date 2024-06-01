// src/components/Dashboard.js
import React from 'react';
import { useUser } from '../context/UserContext';
import { logout } from '../services/authService';

const Dashboard = () => {
  const user = useUser();

  const handleLogout = async () => {
    try {
      await logout();
      alert('Logout successful');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
