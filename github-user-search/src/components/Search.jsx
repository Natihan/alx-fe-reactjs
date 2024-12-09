import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the function to fetch data

function Search() {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [userData, setUserData] = useState(null); // State for user data
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(''); // State for error message

  // Handle input change in search bar
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle form submission (search)
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm) return; // Do nothing if search term is empty

    setLoading(true); // Set loading to true
    setError(''); // Reset error message
    setUserData(null); // Clear user data

    try {
      const data = await fetchUserData(searchTerm); // Fetch user data using search term
      setUserData(data); // Update user data if successful
    } catch (err) {
      setError("Looks like we can't find the user"); // Set error message if the user is not found
      setUserData(null); // Clear previous user data
    } finally {
      setLoading(false); // Stop loading state after API call
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
          onChange={handleSearchChange} // Handle change in input field
        />
        <button type="submit">Search</button>
      </form>

      {/* Display loading indicator */}
      {loading && <p>Loading...</p>}

      {/* Display error message if the search fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>} 

      {/* Display user profile if user data is available */}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="User Avatar" width="150" />
          <h3>{userData.name || 'No Name Available'}</h3>
          <p><strong>Username:</strong> {userData.login}</p> {/* Display GitHub username */}
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
