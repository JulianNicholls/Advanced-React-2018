// This is the structure of a middleware
//
// export default function(store) {
//   return function(next) {
//     return function(action) {
//       ...
//     }
//   }
// }

export default ({ dispatch }) => next => action => {
  // Is the action payload a promise?
  // If not, send it on
  if (!isPromise(action.payload)) return next(action);

  // If so, wait for it to resolve / reject, then collect the data and
  // re-dispatch the action
  action.payload
    .then(data => {
      dispatch({ ...action, payload: data });
    })
    .catch(error => {
      dispatch({ ...action, payload: error, error: true });
    });
};

const isPromise = obj => {
  return !!obj && typeof obj.then === 'function';
};
