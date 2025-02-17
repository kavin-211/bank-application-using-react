import React, { useState } from 'react';
import './style.css';
import { useAppContext } from './Appcontext';

const CreateAccountPage = () => {
  const { setLoggedInUser, loggedInUser ,setUsers,users,setCurrentPage} = useAppContext();
  
  const [name, setName] = useState('');
  const [mailId, setMailId] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = () => {
    const accountNumber = generateAccountNumber();

    if ( !name || !mailId || !password) {
      alert('Please fill in all the required fields.');
      return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mailId)) {
      alert('Please enter a valid email address.');
      return;
    }

    
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    return;
  }

  if (users.some(user => user.mailId === mailId)) {
    alert('Email already exists. Please use a different email.');
    return;
  }
    

    const newAccountDetails = {
      accountNumber,
      name,
      mailId,
      password,
      isAdmin: false,
      loginTime: new Date(),
    };
    setUsers((prevUsers) => [...prevUsers, newAccountDetails]);
    
    setLoggedInUser(newAccountDetails);
    
    console.log('Account created:',loggedInUser);
    
    setName('');
    setMailId('');
    setPassword('');
    setCurrentPage('deposit')
    
    alert(`Your Account has been Created Successfully
    and your account number is ${accountNumber}`)
  };

  const generateAccountNumber = () => {
    
    return Math.floor(Math.random() * 1000000).toString();
  };

  


  return (
    <>
    <div className="create-account-page">
      <img
        src="https://www.shutterstock.com/shutterstock/photos/399995245/display_1500/stock-vector-bank-icon-bank-logo-vector-399995245.jpg"
        alt="login form"
        className="img-fluid"
      />
      <h2>Create Account</h2>
      
      <label>Name:</label>
      <input
        type="text"
        value={name}
        className="transparent-input"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Mail Id:</label>
      <input
        type="text"
        value={mailId}
        className="transparent-input"
        onChange={(e) => setMailId(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        className="transparent-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={createAccount}>Create Account</button>
    </div>
    
    </>
  );
};

export default CreateAccountPage;
