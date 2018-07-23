import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <h3>
    Welcome. <Link to="/signup">Sign up</Link> or <Link to="/login">log in</Link>
  </h3>
);
