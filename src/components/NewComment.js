import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import sanitizeHtml from 'sanitize-html';

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      author: '',
      text: ''
    };
  }

  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value });
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  addComment = () => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', 'hour': '2-digit', minute: '2-digit', 'second': '2-digit' };
    const date  = (new Date()).toLocaleDateString("ru-Ru", options);

    let clean = sanitizeHtml(this.state.text, {
      allowedTags: [],
      allowedAttributes: []
    });

    const newComment = {author: this.state.author, date: date, text: clean};
    let comments = this.props.comments;
    comments.push(newComment);
    this.props.onUpdateComments(comments);

    this.setState({ author: '', text: '' });
  }

  render() {
    return (
      <Form>
        <Form.Group as={Row} controlId="formAuthor">
          <Form.Label column sm="2">Your name:</Form.Label>
          <Col sm="10">
            <Form.Control 
              type="text" 
              name="new-author"
              value={this.state.author}
              onChange={this.handleAuthorChange} />
          </Col>
        </Form.Group>
        <Form.Group controlId="formText">
          <Form.Control as="textarea" rows="3"
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder="Leave your comment"
          />
        </Form.Group>
        <Button 
          disabled={this.state.author.length === 0 || this.state.text.length === 0}
          variant="success"
          onClick={this.addComment}
        >
          Add comment
        </Button>
      </Form>
    );
  }

}

export default NewComment;