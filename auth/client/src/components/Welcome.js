import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <React.Fragment>
    <h2>Welcome.</h2>
    <p>
      <Link to="/signup">Sign up</Link> or <Link to="/login">log in</Link>
    </p>
  </React.Fragment>
);
