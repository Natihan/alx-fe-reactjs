import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the function to fetch user data

function Search() {
  const [searchTerm, setSearchTerm] = useState('');  // State for the search term
  const [userData, setUserData] = useState(null);    // State for user data
  const [loading, setLoading] = useState(false);     // State to show loading status
  const [message, setMessage] = useState('');        // State for error or success message

  // Handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle form submission and search logic
  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    if (!searchTerm) return; // Do nothing if search term is empty

    setLoading(true); // Show loading spinner
    setMessage('');    // Clear previous messages
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(searchTerm);  // Fetch user data from the GitHub API

      if (!data || data.message === 'Not Found') {
        // If the API returns no data or user not found, show the error message
        setMessage("Looks like we can't find the user");
        setUserData(null);
      } else {
        // If data is found, display user information
        setUserData(data);
      }
    } catch (err) {
      // Handle any errors during the API call (network error, etc.)
      setMessage("Looks like we can't find the user");
      setUserData(null);
    } finally {
      setLoading(false); // Hide loading spinner after API call completes
    }
  };

  return (
    <div className="search-container">
      <h2>Search for a GitHub User</h2>

      {/* Form for searching */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={handleSearchChange} // Update search term as the user types
        />
        <button type="submit">Search</button>
      </form>

      {/* Display loading message while fetching data */}
      {loading && <p>Loading...</p>}

      {/* Display error message if no user is found */}
      {message && <p style={{ color: 'red' }}>{message}</p>}  {/* Will show "Looks like we can't find the user" */}

      {/* Display user information if found */}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="User Avatar" width="150" />
          <h3>{userData.name || 'No Name Available'}</h3>
          <p><strong>Username:</strong> {userData.login}</p>
          <p>{userData.bio || 'No Bio 
