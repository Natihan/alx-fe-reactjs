// githubService.js
import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // return user data if found
  } catch (error) {
    // Throwing an error when the user is not found (e.g., 404 response from GitHub API)
    throw new Error('User not found');
  }
};
