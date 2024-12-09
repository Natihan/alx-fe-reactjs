import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm) return; // Don't proceed if searchTerm is empty

    setLoading(true);
    setError('');  // Reset any previous error messages
    setUserData(null);  // Reset any previous user data

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data); // Set fetched user data
    } catch (err) {
      setError("Looks like we can't find the user"); // Set the error message if the fetch fails
      setUserData(null); // Clear user data on error
    } finally {
      setLoading(false); // Stop loading once request is complete
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

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* User data display */}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="User Avatar" width="150" />
          <h3>{userData.name || 'No Name Available'}</h3>
          <p><strong>Username:</strong> {userData.login}</p> {/* Display the username */}
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
