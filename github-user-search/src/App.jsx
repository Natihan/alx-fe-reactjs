import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { fetchUserData } from './services/githubService';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearchSubmit = async (searchTerm) => {
    if (!searchTerm) {
      return;
    }
    try {
      setError('');
      const data = await fetchUserData(searchTerm);
      setUserData(data);
    } catch (err) {
      setError('User not found');
      setUserData(null);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>

      {/* SearchBar component */}
      <SearchBar onSearch={handleSearchSubmit} />

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display User Profile if found */}
      {userData && <UserProfile userData={userData} />}
    </div>
  );
}

export default App;
