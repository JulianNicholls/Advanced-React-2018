import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from 'actions';

class Signup extends React.Component {
  onSubmit = formProps =>
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });

  render() {
    const { handleSubmit } = this.props;

    return (
      <React.Fragment>
        <h2>Sign up</h2>
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
          <fieldset>
            <label htmlFor="name">Name (Optional)</label>
            <Field name="name" type="text" component="input" autoComplete="none" />
          </fieldset>
          {this.props.errorMessage && (
            <div className="error">{this.props.errorMessage}</div>
          )}
          <button>Sign up</button>
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
  reduxForm({ form: 'signup' })
)(Signup);
