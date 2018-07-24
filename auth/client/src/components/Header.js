import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <ul className="nav">
          <li className="brand">
            <Link to="/">Redux Auth</Link>
          </li>
          <li>
            <Link to="/feature">Feature</Link>
          </li>
          <li className="flush-right">
            <Link to="/signup">Sign up</Link>
          </li>
          <li className="flush-right">
            <Link to="/login">Log in</Link>
          </li>
          <li className="flush-right">
            <Link to="/logout">Log out</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
