import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// Profile component that renders nested routes like ProfileDetails and ProfileSettings
const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      
      {/* The nested route will be rendered here */}
      <Outlet />
    </div>
  );
};

export default Profile;
