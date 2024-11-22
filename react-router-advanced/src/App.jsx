import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import BlogPost from './pages/BlogPost';
import PrivateRoute from './components/PrivateRoute'; // The protected route component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/post/1">Post 1</Link></li>
            <li>
              <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
                {isAuthenticated ? 'Logout' : 'Login'}
              </button>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected Profile Route */}
          <Route 
            path="/profile" 
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </PrivateRoute>
            }>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
