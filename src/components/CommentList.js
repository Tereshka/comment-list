import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component  {

  deleteComment = (comment) => {
    let comments = this.props.comments.filter(el => 
      el !== this.props.comments.find(item =>
        item.author === comment.author && item.date === comment.date && item.text === comment.text
    ));
    this.props.onUpdateComments(comments);
  }

  render() {
    return (
      <div className="comment-list">
        {this.props.comments.map((item, i) => (
          <Comment key={i} comment={item} onDeleteComment={this.deleteComment} />
        ))}
      </div>
    );
  }
}

export default CommentList;