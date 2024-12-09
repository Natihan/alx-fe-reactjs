import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Assuming this is the function to fetch user data

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // Error state to store the error message

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Capture the search term as user types
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (!searchTerm) return; // Do nothing if search term is empty

    setLoading(true); // Set loading state to true while fetching data
    setError(''); // Reset any previous error
    setUserData(null); // Clear any previously fetched user data

    try {
      const data = await fetchUserData(searchTerm); // Fetch data using the search term
      setUserData(data); // If successful, update userData with the returned data
    } catch (err) {
      setError('Looks like we can\'t find the user'); // Set error message when fetch fails
      setUserData(null); // Clear user data if not found
    } finally {
      setLoading(false); // Stop loading once the request finishes
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
          onChange={handleSearchChange} // Handle the input change
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading state: Show "Loading..." message */}
      {loading && <p>Loading...</p>}

      {/* Error message: Show this if an error occurs */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display user data if available */}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="User Avatar" width="150" />
          <h3>{userData.name || 'No Name Available'}</h3>
          <p><strong>Username:</strong> {userData.login}</p> {/* Display GitHub username (login) */}
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
