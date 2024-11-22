import React from 'react';

// Create a context with a default value (empty strings for name and email)
const UserContext = React.createContext({
  name: '',
  email: ''
});

export default UserContext;
