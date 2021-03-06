import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  renderComments() {
    return [...this.props.comments] // Preserve original array
      .reverse() // Reverse it
      .map(comment => <li key={comment}>{comment}</li>);
  }

  render() {
    return (
      <div className="comment-list">
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);
