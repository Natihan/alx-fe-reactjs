import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the function to fetch user data

function Search() {
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
  const [userData, setUserData] = useState(null); // State to store the fetched user data
  const [loading, setLoading] = useState(false); // State to manage loading indicator
  const [message, setMessage] = useState(''); // State to store the success or error message

  // Handle input field change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term as user types
  };

  // Handle form submission
  const handleSearchSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    if (!searchTerm) return; // Don't proceed if search term is empty

    setLoading(true); // Set loading state to true
    setMessage(''); // Clear any previous messages
    setUserData(null); // Clear any previous user data

    try {
      const data = await fetchUserData(searchTerm); // Fetch data from GitHub API
      if (data) {
        setUserData(data); // Set the fetched user data if found
      } else {
        setMessage("Looks like we can't find the user"); // Set message if no user found
      }
    } catch (err) {
      setMessage("Looks like we can't find the user"); // Set message if API fails
    } finally {
      setLoading(false); // Stop loading after the API call completes
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
          onChange={handleSearchChange} // Update the search term as user types
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading indicator */}
      {loading && <p>Loading...</p>}

      {/* Display message if user not found */}
      {message && <p style={{ color: 'red' }}>{message}</p>}  {/* This will display "Looks like we can't find the user" */}

      {/* Displaying user data if available */}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="User Avatar" width="150" />
          <h3>{userData.name || 'No Name Available'}</h3>
          <p><strong>Username:</strong> {userData.login}</p>
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
