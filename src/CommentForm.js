import React, { Component } from 'react';

class CommentForm extends Component{
  constructor(){
    super()
    this.state = {
      characters: 0
    }
  }

  render(){
    return(
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the discussion</label>
        <div className="comment-form-fields">
          <input placeholder="Name:" ref={(input) => this._author = input}/>
          <textarea placeholder="Comment:" ref={(textarea) => this._body = textarea} onKeyUp={this._getCharacterCount.bind(this)}></textarea>
          <p className="counter">{this.state.characters.toString()} characters</p>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post comment</button>
        </div>
      </form>
    );
  }

  _handleSubmit(event){
    event.preventDefault();
    if(!this._author.value || !this._body.value){
      alert("Please enter your name and comment")
    }

    let author = this._author;
    let body = this._body;

    this.props.addComment(author.value, body.value);

    this._author.value = '';
    this._body.value = '';

    this.setState({ characters: 0  });
  }

  _getCharacterCount(){
    this.setState({characters: this._body.value.length})
  }
}

export default CommentForm;
