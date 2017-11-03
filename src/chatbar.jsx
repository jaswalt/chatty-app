import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      content: ""
    };
  }

  onContentEnter = (e) => {
    if (e.key === 'Enter') {
      this.props.getMessage(this.props.currentUser, this.state.content);
    }
  }

  onContentChange = (e) => {
    this.setState({ content: e.target.value });
  }

  onUsernameEnter = (e) => {
    if (e.key === 'Enter') {
      this.props.onNewUsername(this.state.username);
    }
  }

  onUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <footer className="chatbar">

        <input
          className="chatbar-username"
          type="text"
          placeholder="Your Name (Optional)"
          onChange={ this.onUsernameChange }
          value={ this.state.username }
          onKeyPress={ this.onUsernameEnter } />

        <input
          className="chatbar-message"
          type="text"
          placeholder="Type a message and hit ENTER"
          onChange={ this.onContentChange }
          value={ this.state.content }
          onKeyPress={ this.onContentEnter } />
      </footer>
    );
  }
}

export default ChatBar;