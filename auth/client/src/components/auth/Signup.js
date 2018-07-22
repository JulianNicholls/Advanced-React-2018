import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
        </fieldset>
      </form>
    );
  }
}

export default Signup;
