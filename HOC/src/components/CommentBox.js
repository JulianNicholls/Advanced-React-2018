import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class CommentBox extends React.Component {
  state = {
    comment: ''
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  saveComment = e => {
    e.preventDefault();

    // Save the comment with an action creator
    this.props.saveComment(this.state.comment);

    // Empty the textarea
    this.setState({
      comment: ''
    });
  };

  render() {
    return (
      <div className="comment-box">
        <form onSubmit={this.saveComment}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Save comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
