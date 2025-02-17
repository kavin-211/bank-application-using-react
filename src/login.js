// LoginPage.js
import React, { useState } from 'react';
import './style.css';
import { useAppContext } from './Appcontext';

const LoginPage = () => {
  const { setLoggedInUser, users ,setCurrentPage} = useAppContext();
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.accountNumber === accountNumber && u.password === password);

    if (user) {
      setLoggedInUser(user);
    } else {
      alert('Invalid account number or password');
    }

    setAccountNumber('');
    setPassword('');
   
      setCurrentPage('detail');
  
  
  };
  

  return (
    <div className="deposit-page">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <p>
          Account Number:</p>
          <input
            type="text"
            value={accountNumber}
            className="transparent-input"
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        
        <br />
        <p>
          Password:</p>
          <input
            type="password" 
            value={password}
            className="transparent-input"
            onChange={(e) => setPassword(e.target.value)}
          />
        
        <br />

        <button type="submit">Submit</button>
      </form>
      {/* <button className="btn" onClick={setCurrentPage('createAccount')}>
            Sign Up
          </button> */}
    </div>
  );
};

export default LoginPage;
