import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

describe('commentsReducer', () => {
  it('handles the action SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      text: 'comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['comment']);
  });

  it('handles unknown actions', () => {
    const newState = commentsReducer([], { type: 'invalid' });

    expect(newState).toEqual([]);
  });
});
