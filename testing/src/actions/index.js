import { SAVE_COMMENT } from 'actions/types';

export function saveComment(text) {
  return {
    type: SAVE_COMMENT,
    text
  };
}
