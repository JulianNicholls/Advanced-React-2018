import axios from 'axios';

import { AUTH_USER } from 'actions/types';

export const signup = formProps => async dispatch => {
  const response = await axios.post('http://localhost:3090/signup', formProps);

  const { token } = response.data;

  dispatch({ type: AUTH_USER, token });
};
