import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class Logout extends React.Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <div>Sorry to see you go.</div>;
  }
}

export default connect(
  null,
  actions
)(Logout);
