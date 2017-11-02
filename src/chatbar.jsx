import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
    this.props.getMessage(e.target.value);
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" type="text" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" type="text" placeholder="Type a message and hit ENTER" onKeyPress={ this.handleEnter } />
      </footer>
    );
  }
}

export default ChatBar;