import React from 'react';

function UserProfile({ userData }) {
  return (
    <div className="user-info">
      <img src={userData.avatar_url} alt="User Avatar" width="150" />
      <h2>{userData.name || 'No Name Available'}</h2>
      <p>{userData.bio || 'No Bio Available'}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        Visit GitHub Profile
      </a>
    </div>
  );
}

export default UserProfile;
