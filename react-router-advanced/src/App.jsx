// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './components/Profile';
import BlogPost from './pages/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate user authentication

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/post/1">Blog Post 1</Link></li>
            <li>
              <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
                {isAuthenticated ? 'Logout' : 'Login'}
              </button>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<BlogPost />} />

          {/* Protected Route */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} element={<Profile />} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
