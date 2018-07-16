import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

describe('Comments Process', () => {
  beforeEach(() => {
    moxios.install();

    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [
        {
          body: 'fetched content 1'
        },
        {
          body: 'fetched comment 2'
        }
      ]
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('can fetch comments externally and display them', done => {
    // Render the entire App
    const mounted = mount(
      <Root>
        <App />
      </Root>
    );

    // Press the fetchComments button
    mounted.find('.fetch-comments').simulate('click');

    // Expect to find a list of comments after a short delay
    moxios.wait(() => {
      mounted.update();
      expect(mounted.find('li').length).toEqual(2);
      done();
      mounted.unmount();
    });
  });
});
