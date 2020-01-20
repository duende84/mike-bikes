import React from 'react';
import { Link } from 'react-router-dom';


function Profile() {
  return(
    <div>
      <p>Profile</p>
      <Link to="/academy" title="Academy"><span>Academy</span></Link>
    </div>
  );
}

export default Profile;
