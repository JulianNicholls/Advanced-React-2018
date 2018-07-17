import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

describe('CommentList', () => {
  const initialState = {
    comments: ['Comment 1', 'Second Cmnt']
  };

  let mounted;

  beforeEach(() => {
    mounted = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  it('creates exactly 1 li per comment', () => {
    expect(mounted.find('li').length).toEqual(2);
  });

  it('has the text of each comment', () => {
    // expect(mounted.text()).toContain('Comment 1');     // Discouraged
    // expect(mounted.text()).toContain('Second Cmnt');

    const content = mounted.render();

    expect(content.text()).toContain('Comment 1');
    expect(content.text()).toContain('Second Cmnt');
  });
});
