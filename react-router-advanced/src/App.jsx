// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './components/Profile';  // Profile layout component
import BlogPost from './pages/BlogPost';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/post/1">Post 1</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} /> {/* Profile component with nested routes */}
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
