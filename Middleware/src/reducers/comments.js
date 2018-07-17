import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.text];

    case FETCH_COMMENTS:
      const fetched = action.payload.data.map(comment => comment.body);

      return [...state, ...fetched];

    default:
      return state;
  }
};
