import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li><Link to="/">Redux Auth</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/login">Log in</Link></li>
          <li><Link to="/logout">Log out</Link></li>
          <li><Link to="/feature">Feature</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;