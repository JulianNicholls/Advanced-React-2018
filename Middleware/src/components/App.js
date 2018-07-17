import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import requireAuth from 'components/requireAuth';

import * as actions from 'actions';

class App extends React.Component {
  renderButton() {
    return (
      <button onClick={() => this.props.changeAuth(!this.props.auth)}>
        {this.props.auth ? 'Log out' : 'Log in'}
      </button>
    );
  }

  renderHeader() {
    return (
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">New Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderHeader()}
        <Route path="/" exact component={CommentList} />
        <Route path="/post" component={requireAuth(CommentBox)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
