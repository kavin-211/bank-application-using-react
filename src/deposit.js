
import React, { useState } from 'react';
import './style.css';
import { useAppContext } from './Appcontext';

const DepositPage = () => {
  const { loggedInUser,  setLoggedInUser,setUsers } = useAppContext();
  const [amount, setAmount] = useState(0);


  const handleDeposit = () => {
    const depositAmount = parseInt(amount);
    const newBalance = (loggedInUser?.balance || 0) + depositAmount;
  
    setLoggedInUser({
      ...loggedInUser,
      balance: newBalance,
    });
  
   
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.accountNumber === loggedInUser.accountNumber
          ? { ...user, balance: newBalance }
          : user
      )
    );
  
    setAmount('');
  };

  const buttonStyle = {
    backgroundColor: parseInt(amount) <= 0 ? 'lightgray' : 'black',
    color: 'white',
    cursor: parseInt(amount) <= 0 ? 'not-allowed' : 'pointer',
  };

  return (
    <div className="deposit-page">
      <img
        src="https://www.shutterstock.com/shutterstock/photos/399995245/display_1500/stock-vector-bank-icon-bank-logo-vector-399995245.jpg"
        alt="login form"
        className="img-fluid"
      />
      <br></br>
      <h1>ATM Deposit</h1>
      <br></br>
      <p>Account Number: {loggedInUser?.accountNumber}</p>
      <br></br>
      <h3 id="balance">Account Balance {loggedInUser?.balance || 0}</h3>
      <br></br>
      <label>Enter the Amount</label>
      <input
        type="number"
        placeholder="Enter the Amount"
        value={amount}
        className="transparent-input"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br></br>
      <button
        onClick={handleDeposit}
        disabled={parseInt(amount) <= 0}
        style={buttonStyle}
      >
        Deposit
      </button>
      <p className='center'>Please remember your account number for next login</p>
    </div>
  );
};

export default DepositPage;
