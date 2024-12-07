import React, { useState } from 'react';
import { Footer, Blog, Available, Services, Header,Login } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Change state to logged in
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} /> // Pass the handleLogin function to Login
      ) : (
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Available />
          <Services />
          <Blog />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
