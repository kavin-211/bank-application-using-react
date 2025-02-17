// Appcontext.js

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([
    {
      accountNumber: '1234567',
      name: 'Admin User',
      mailId: 'admin@example.com',
      password: 'adminpassword',
      balance: 0,
      isAdmin: true,
      loginTime:new Date(),
    },
    {
      accountNumber: '2345678',
      name: ' User1',
      mailId: 'user@example.com',
      password: 'user1password',
      balance: 0,
      isAdmin: false,
      loginTime:new Date(),
    },
    
  ]);

  const contextValue = {
    currentPage,
    setCurrentPage,
    loggedInUser,
    setLoggedInUser,
    users,
    setUsers,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
