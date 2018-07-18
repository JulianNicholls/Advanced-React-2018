import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reduxAsync from 'middlewares/async';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxAsync));

  return <Provider store={store}>{children}</Provider>;
};
