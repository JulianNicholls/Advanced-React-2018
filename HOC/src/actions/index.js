import axios from 'axios';

import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export function saveComment(text) {
  return {
    type: SAVE_COMMENT,
    text
  };
}

export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: response // Interestingly, calling this response doesn't work
  };
}

export function changeAuth(logIn) {
  return {
    type: CHANGE_AUTH,
    payload: logIn
  };
}
