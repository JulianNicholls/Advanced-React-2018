// This is the structure of a middleware
//
// export default function(store) {
//   return function(next) {
//     return function(action() { ... }
//   }
// }

export default ({ dispatch }) => next => action => {
  // Is the action payload a promise?
  // If not, send it on
  if (!action.payload || !action.payload.then) {
    // Not a promise
    return next(action);
  }

  // If so, wait for it to resolve / reject, then collect the data and
  // re-dispatch the action
  action.payload
    .then(data => {
      dispatch({ ...action, payload: data });
    })
    .catch(err => {
      dispatch({ ...action, payload: [] });
    });
};
