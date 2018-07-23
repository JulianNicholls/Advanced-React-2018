import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from 'actions';

class Signup extends React.Component {
  onSubmit = formProps => {
    console.log(formProps);

    this.props.signup(formProps);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
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
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signup);
