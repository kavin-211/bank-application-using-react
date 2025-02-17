import React from 'react';
import { HashRouter as Router} from 'react-router-dom';
import { AppProvider, useAppContext } from './Appcontext';

import HomePage from './home';
import CreateAccountPage from './createAccount';
import DepositPage from './deposit';
import WithdrawPage from './withdraw';
import Detailpage from './detail';
import LoginPage from './login';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div>
          <Navigation />
          <PageRenderer />
        </div>
      </Router>
    </AppProvider>
  );
};

const Navigation = () => {
  const { setCurrentPage,loggedInUser ,setLoggedInUser} = useAppContext();

  const renderAuthButtons = () => {
    if (loggedInUser) {
      if(loggedInUser.isAdmin){
        return(
          <>
          <button className="btn" onClick={() => handleButtonClick('detail')} style={{color: "red"}}>
            All Details
          </button>
          
        {loggedInUser && (
              <button className="btn" onClick={handleLogout} >
                Logout
              </button>
            )}
        </>
        )
      }else{
      
      return (
        <>
          <button className="btn" onClick={() => handleButtonClick('deposit')} style={{color: "red"}}>
            Deposit
          </button>
          <button className="btn" onClick={() => handleButtonClick('withdraw')} style={{color: "red"}}>
            Withdraw
          </button>
          <button className="btn" onClick={() => handleButtonClick('detail')} style={{color: "red"}}>
            Details
          </button>
          
          {loggedInUser && (
              <button className="btn" onClick={handleLogout} >
                Logout
              </button>
            )}
          
          
         
        </>
      )};
    } else {
      return (
        <>
          
          <button className="btn" onClick={() => handleButtonClick('home')}>
            Home
          </button>
          
        </>
      );
    }
  };

  
  const handleLogout = () => {
    setLoggedInUser(null);
    setCurrentPage('home');
  };


  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#" style={{color: "red"}}>
            Bank project using React
          </a>
        </div>
        <br/>
        {renderAuthButtons()}
        
      </div>
    </nav>
  );
};

const PageRenderer = () => {
  const { currentPage } = useAppContext();

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'createAccount':
      return <CreateAccountPage />;
    case 'deposit':
      return <DepositPage />;
    case 'withdraw':
      return <WithdrawPage />;
    case 'detail':
      return <Detailpage />;
      case 'login':
        return <LoginPage />;
    
    default:
      return <HomePage />;
  }
};

export default App;
