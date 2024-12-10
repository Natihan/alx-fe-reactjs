import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the function to fetch user data

function Search() {
  const [searchTerm, setSearchTerm] = useState('');  // State for the search term (username)
  const [location, setLocation] = useState('');       // State for location filter
  const [minRepos, setMinRepos] = useState(0);        // State for minimum repositories filter
  const [userData, setUserData] = useState(null);     // State for user data
  const [loading, setLoading] = useState(false);      // State to show loading status
  const [message, setMessage] = useState('');         // State for error or success message

  // Handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle changes in the location input
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handle changes in the minimum repositories input
  const handleMinReposChange = (e) => {
    setMinRepos(e.target.value);
  };

  // Handle form submission and search logic
  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    if (!searchTerm && !location && minRepos <= 0) return; // Do nothing if no search term or filters

    setLoading(true); // Show loading spinner
    setMessage('');    // Clear previous messages
    setUserData(null); // Clear previous user data

    try {
      // Build the query string based on the inputs
      let query = searchTerm;
      if (location) query += `+location:${location}`;
      if (minRepos > 0) query += `+repos:>=${minRepos}`;

      const data = await fetchUserData(query);  // Fetch user data from the GitHub API

      if (!data || data.items.length === 0) {
        setMessage("Looks like we can't find any users matching your criteria");
        setUserData(null);
      } else {
        setUserData(data.items);  // Set the user data to the items returned by the API
      }
    } catch (err) {
      setMessage("An error occurred while fetching data");
      setUserData(null);
    } finally {
      setLoading(false); // Hide loading spinner after API call completes
    }
  };

  return (
    <div className="search-container p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Advanced GitHub User Search</h2>
      
      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="searchTerm" className="text-sm font-medium">GitHub Username</label>
          <input
            type="text"
            id="searchTerm"
            placeholder="Enter GitHub username"
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="text-sm font-medium">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location (optional)"
            value={location}
            onChange={handleLocationChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="minRepos" className="text-sm font-medium">Minimum Repositories</label>
          <input
            type="number"
            id="minRepos"
            placeholder="Enter minimum repositories"
            value={minRepos}
            onChange={handleMinReposChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading message */}
      {loading && <p>Loading...</p>}

      {/* Display error or success message */}
      {message && <p className="text-red-500">{message}</p>}

      {/* Display user information if found */}
      {userData && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Search Results:</h3>
          <ul className="space-y-4">
            {userData.map((user) => (
              <li key={user.id} className="border p-4 rounded-md">
                <img src={user.avatar_url} alt="User Avatar" className="w-16 h-16 rounded-full" />
                <div className="ml-4 inline-block">
                  <h4 className="font-semibold">{user.login}</h4>
                  <p className="text-sm">{user.location || 'No location available'}</p>
                  <p className="text-sm">Repositories: {user.public_repos}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mt-2 inline-block"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
