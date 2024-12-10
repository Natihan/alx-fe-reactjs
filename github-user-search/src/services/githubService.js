import axios from 'axios';

export const fetchUserData = async (query) => {
  const url = `https://api.github.com/search/users?q=${query}&per_page=10`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error('Error fetching data from GitHub API:', err);
    throw err;
  }
};
