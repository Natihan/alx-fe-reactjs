import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // State to hold the search term, user data, and error message
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle the search button click
  const handleSearchSubmit = async () => {
    if (!searchTerm) {
      return;
    }
    try {
      setError('');
      const response = await axios.get(`https://api.github.com/users/${searchTerm}`);
      setUserData(response.data);
    } catch (err) {
      setError('User not found');
      setUserData(null);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>

      {/* Search Input and Button */}
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter GitHub username"
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display User Information if found */}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt="User Avatar" width="150" />
          <h2>{userData.name || 'No Name Available'}</h2>
          <p>{userData.bio || 'No Bio Available'}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
