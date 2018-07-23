import React from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends React.Component {
  onSubmit = ({ email, password, name }) => {
    console.log({ name, email, password });
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

export default reduxForm({
  form: 'signup'
})(Signup);
