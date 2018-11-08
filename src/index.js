import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoryBox from './StoryBox';
import CommentBox from './CommentBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<StoryBox />, document.getElementById('story-box'));
ReactDOM.render(<CommentBox />, document.getElementById('comment-box'));
registerServiceWorker();
