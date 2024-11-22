// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost'; // Import BlogPost component

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog/1">Blog Post 1</Link></li>
            <li><Link to="/blog/2">Blog Post 2</Link></li>
            <li><Link to="/blog/3">Blog Post 3</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Define other routes */}
          <Route path="/" element={<Home />} />

          {/* Define dynamic blog post route */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
