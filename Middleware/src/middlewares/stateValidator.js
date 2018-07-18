import tv4 from 'tv4';

import schema from 'middlewares/stateSchema';

export default ({ getState }) => next => action => {
  next(action);

  if (!tv4.validate(getState(), schema)) console.warn('State has an invalid schema');
};
