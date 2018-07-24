import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
          <li>
            <Link to="/feature">Feature</Link>
          </li>

          <li className="flush-right">
            <Link to="/logout">Log out</Link>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li className="flush-right">
            <Link to="/signup">Sign up</Link>
          </li>
          <li className="flush-right">
            <Link to="/login">Log in</Link>
          </li>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <header>
        <ul className="nav">
          <li className="brand">
            <Link to="/">Redux Auth</Link>
          </li>
          {this.renderLinks()}
        </ul>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(Header);
