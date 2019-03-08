import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Comment extends Component  {
  
  deleteComment = () => {
    let comment = this.props.comment;
    this.props.onDeleteComment(comment);
  }

  render() {
    const {author, date, text} = this.props.comment;
    return (
      <Card border="info" className="mb-2">
        <Card.Header>
          {author}
          <span className="ml-2 text-muted">{date}</span>
          <Button variant="danger" className="float-right" onClick={this.deleteComment}>X</Button>
        </Card.Header>
        <Card.Body>
          <Card.Text style={{whiteSpace: 'pre-line'}}>{text}</Card.Text>
        </Card.Body> 
      </Card>
    );
  }
}

export default Comment;