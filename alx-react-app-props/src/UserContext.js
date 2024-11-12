import React from 'react';

// Create a Context for user data with default values
const UserContext = React.createContext({
  name: '',
  email: ''
});

export default UserContext;
