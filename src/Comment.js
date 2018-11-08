import React, { Component } from 'react';

class Comment extends Component {
  constructor(){
    super();
    this.state = {
      isAbusive: false,
      isDeleted: false
    };
  }

  render() {
    let commentBody;
    if(!this.state.isAbusive){
      commentBody = this.props.body;
    } else {
      commentBody = <em>Content marked as abusive</em>;
    }
    if(!this.state.isDeleted){
      return(
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">
            {commentBody}
          </p>
          <div className="comment-actions">
            <a href="#" className="comment-footer-delete" onClick={this._toggleDelete.bind(this)}>
              Delete comment
            </a>
            <a href="#" className="comment-footer-abuse" onClick={this._toggleAbuse.bind(this)}>
              Report as abuse
            </a>
          </div>
        </div>
      );
    } else {
      return '';
    }
  }

  _toggleAbuse(event){
    event.preventDefault();
    this.setState({
      isAbusive: !this.state.isAbusive
    });
  }


  _toggleDelete(event){
    event.preventDefault();
    this.setState({
      isDeleted: !this.state.isDeleted
    });
  }
}

export default Comment;
