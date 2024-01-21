import React, { useState } from 'react';

import './App.css'

import Home from './components/Home';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='App'>
      <h1>Authentication App</h1>
      <Home isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </div>
  );
};

export default App;
