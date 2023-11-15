// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <div>
        {/* Common header or navigation can be added here */}
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          {/* Add more routes as needed */}         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
