import axios from 'axios';

import { AUTH_USER, AUTH_ERROR } from 'actions/types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);

    const { token } = response.data;

    dispatch({ type: AUTH_USER, token });
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, text: 'That email address is already in use' });
  }
};
