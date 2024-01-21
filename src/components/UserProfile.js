import React from 'react';

const UserProfile = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <div>
      <h3>User Profile</h3>
      {isLoggedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in</p>
          <button onClick={onLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
