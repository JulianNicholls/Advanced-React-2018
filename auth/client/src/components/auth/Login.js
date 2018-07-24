import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from 'actions';

class Login extends React.Component {
  onSubmit = formProps =>
    this.props.login(formProps, () => {
      this.props.history.push('/feature');
    });

  render() {
    const { handleSubmit } = this.props;

    return (
      <React.Fragment>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" component="input" autoComplete="none" />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          {this.props.errorMessage && (
            <div className="error">{this.props.errorMessage}</div>
          )}
          <button>Log in</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'login' })
)(Login);
