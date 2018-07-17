import React from 'react';
import { connect } from 'react-redux';

export default (ChildComponent, redirectPath = '/') => {
  class Composed extends React.Component {
    componentDidMount() {
      this.redirectIfLoggedOut();
    }

    componentDidUpdate() {
      this.redirectIfLoggedOut();
    }

    redirectIfLoggedOut() {
      if (!this.props.auth) {
        this.props.history.push(redirectPath);
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  return connect(mapStateToProps)(Composed);
};
