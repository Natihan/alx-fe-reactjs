import React, { useContext } from 'react';
import UserContext from './UserContext';
import React from 'react';

function UserDetails() {
    // Use the useContext hook to access userData from the context
    const userData = useContext(UserContext);
  
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
const UserContext = React.createContext({
  name: '',
  email: ''
});

export default UserContext;
