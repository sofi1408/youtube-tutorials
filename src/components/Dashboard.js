import React from 'react';
import UserProfile from './UserProfile';

const DashboardStyles = {
    width: '100%',
    textAlign: 'center',
    background:'antiquewhite'

}

const Dashboard = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <div style={DashboardStyles}>
      <UserProfile isLoggedIn={isLoggedIn} onLogin={onLogin} onLogout={onLogout} />
    </div>
  );
};

export default Dashboard;
