import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('App', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it('contains a CommentBox component', () => {
    // Check that the component is there
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });

  it('contains a CommentList component', () => {
    // Check that the component is there
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
