
import React from 'react';
import './style.css';
import { useAppContext } from './Appcontext';

const HomePage = () => {
  const { setCurrentPage } = useAppContext();

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="home-page">
      <div className="action-buttons">
        <button className="btn" onClick={() => handleButtonClick('login')} >
          Login
        </button>
        <button className="btn" onClick={() => handleButtonClick('createAccount')}>
          Sign Up
        </button>
      </div>
      <img src='https://www.shutterstock.com/shutterstock/photos/399995245/display_1500/stock-vector-bank-icon-bank-logo-vector-399995245.jpg'  alt="Bank Logo"/>
      <h2 className='center'>Welcome to Financial Bank</h2>
     
      
      <p className='center'>Financial Bank is a forward-thinking financial institution dedicated to providing a secure and trustworthy platform for individuals and businesses to manage their finances.<br>
      </br> Committed to transparency, integrity, and customer-centric services, Financial Bank strives to build lasting relationships with its clients.</p>
      <footer>
        <p>&copy; KAVINPRASATH S M</p>
        <p>1<sup>st</sup>M.SC COMPUTER SCIENCE</p>
      </footer>
    </div>

  );
};

export default HomePage;
