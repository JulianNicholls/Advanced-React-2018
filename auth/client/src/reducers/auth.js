import { AUTH_USER } from 'actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.token };

    default:
      return state;
  }
};
