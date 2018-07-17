import { SAVE_COMMENT } from 'actions/types';
import { saveComment } from 'actions';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct content', () => {
    const action = saveComment('comment');

    expect(action.text).toEqual('comment');
  });
});
