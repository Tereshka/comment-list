import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CommentList from './CommentList';
import NewComment from './NewComment';

class App extends Component {
  constructor(props) {
    super(props);

    let comments = JSON.parse(localStorage.getItem('comments'));

    this.state = { 
      comments: !comments ? [] : comments 
    };
  }

  updateComments = (comments) => {
    localStorage.setItem("comments",  JSON.stringify(comments));
    this.setState({comments});
  }

  render() {
    return (
      <Container>
        <h1>Comments</h1>
        <CommentList comments={this.state.comments} onUpdateComments={this.updateComments} />
        <h2>Add new comment</h2>
        <NewComment comments={this.state.comments} onUpdateComments={this.updateComments}/>
      </Container>
    );
  }
}

export default App;
