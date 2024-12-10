import axios from 'axios';

// Function to fetch user data based on the search query
export const fetchUserData = async (query, location = '', minRepos = 0) => {
  // Start building the query string with the basic username search term
  let searchQuery = query;
  
  // If location is provided, add it to the query
  if (location) {
    searchQuery += `+location:${location}`;
  }

  // If minRepos is provided and is greater than 0, add it to the query
  if (minRepos > 0) {
    searchQuery += `+repos:>=${minRepos}`;
  }

  // Construct the API URL with the final query
  const url = `https://api.github.com/search/users?q=${searchQuery}&per_page=10`;

  try {
    // Make the API request to GitHub's search users endpoint
    const response = await axios.get(url);
    return response.data; // Return the response data containing the search results
  } catch (err) {
    console.error('Error fetching data from GitHub API:', err);
    throw err; // Propagate the error for handling in the component
  }
};
