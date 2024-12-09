import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // Error state to store error messages

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    setLoading(true);
    setError(''); // Reset error message on new search
    setUserData(null); // Reset user data

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data); // Set user data if the API request is successful
    } catch (err) {
      setError('Looks like we can\'t find the user'); // Display error message if user not found
      setUserData(null); // Reset user data
    } finally {
      setLoading(false); // Stop the loading indicator
    }
  };

  return (
    <div className="search-container">
      <h2>Search for a GitHub User</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Show Loading indicator while waiting for response */}
      {loading && <p>Loading...</p>}

      {/* Error message when API call fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display User data if available */}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="User Avatar" width="150" />
          <h3>{userData.name || 'No Name Available'}</h3>
          <p><strong>Username:</strong> {userData.login}</p> {/* GitHub login */}
          <p>{userData.bio || 'No Bio Available'}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
