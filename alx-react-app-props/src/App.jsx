import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';  // Import the UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Provide the userData to the rest of the app
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
