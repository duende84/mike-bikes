import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div>
      <header>
        <h2>404: Not found</h2>
      </header>
      <Link to='/'>Back to home</Link>
    </div>
  )
}

export default NotFound;