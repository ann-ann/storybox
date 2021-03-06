import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  constructor(){
    super();

    this.state = {
      showComments: false,
      comments: [
        { id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
        { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }
      ]
    };
  }

  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText =  'Show comments';

    if(this.state.showComments) {
      commentNodes = <div className="comment-list">{comments}</div>;
      buttonText = 'Hide comments';
    }

    return(
      <div className="comment-box">
      <CommentForm addComment={this._addComment.bind(this)} />
      <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        <h2>Comments</h2>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        {commentNodes}
      </div>
    );
  }

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) })
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  }

  _getCommentsTitle(commentCount){
    if(commentCount === 0) {
      return 'No comments yet';
    } else if(commentCount === 1) {
      return '1 comment'
    } else {
      return `${commentCount} comments`
    }
  }

  _handleClick(event){
    event.preventDefault();
    this.setState({
      showComments: !this.state.showComments
    });
  }
}

export default CommentBox;
