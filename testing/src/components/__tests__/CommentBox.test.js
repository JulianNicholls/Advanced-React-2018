import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

describe('CommentBox', () => {
  let mounted;

  beforeEach(() => {
    mounted = mount(
      <Root>
        <CommentBox />
      </Root>
    ); // A shallow wrapper would do, this is for information
  });

  afterEach(() => {
    mounted.unmount();
  });

  it('has a textarea and a button', () => {
    expect(mounted.find('textarea').length).toEqual(1);
    expect(mounted.find('button').length).toEqual(1);
  });

  describe('the textarea', () => {
    beforeEach(() => {
      // Prime the textarea contents
      mounted.find('textarea').simulate('change', {
        target: {
          value: 'Typed text'
        }
      });

      // Flush the resulting setState call
      mounted.update();
    });

    it('can be changed', () => {
      // Check that the contents changed
      expect(mounted.find('textarea').prop('value')).toEqual('Typed text');
    });

    it('is emptied after submission', () => {
      // Submit the form
      mounted.find('form').simulate('submit');
      mounted.update();

      // Check that the contents changed back to ''
      expect(mounted.find('textarea').prop('value')).toEqual('');
    });
  });
});
