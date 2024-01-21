import React from 'react';

import Dashboard from './Dashboard';
import SideNav from './SideNav';

const homePageStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

const Home = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <div style={homePageStyle}>
      <SideNav />
      <Dashboard isLoggedIn={isLoggedIn} onLogin={onLogin} onLogout={onLogout} />
    </div>
  );
};

export default Home;
