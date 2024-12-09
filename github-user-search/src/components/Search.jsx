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

    setLoading(true);  // Start loading state
    setError('');  // Reset error message on new search
    setUserData(null);  // Clear previous user data

    try {
      const data = await fetchUserData(searchTerm);  // Fetch user data from GitHub API
      setUserData(data);  // If successful, set user data
    } catch (err) {
      setError('Looks like we can\'t find the user');  // Set error message if API call fails
      setUserData(null);  // Clear any previous user data
    } finally {
      setLoading(false);  // Stop loading state
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

      {/* Loading state: Show "Loading..." message while data is being fetched */}
      {loading && <p>Loading...</p>}

      {/* Error message: If error state is set, display the error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* User data: If valid user data is available, display user information */}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="User Avatar" width="150" />
          <h3>{userData.name || 'No Name Available'}</h3>
          <p><strong>Username:</strong> {userData.login}</p> {/* GitHub username */}
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
