// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useUser } from './context/UserContext';

const App = () => {
  const user = useUser();

  return (
    <Router>
      <Routes>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} user={user} />
      </Routes>
    </Router>
  );
};

export default App;
