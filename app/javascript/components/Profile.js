import React from 'react';
import NavBar from './NavBar';

const Profile = () => {
  return(
    <div className="container border border-white vh-100">
      <NavBar/>
      <div>
        <h3>Michael Henao</h3>
        <h4>A little bit about myself</h4>
      </div>
      <p>Hello,</p>
      <p>The first time I rode...</p>
    </div>
  );
}

export default Profile;
