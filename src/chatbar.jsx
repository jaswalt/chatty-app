import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>Hello, {this.props.currentUser.name}</h1>;
  }
}

export default ChatBar;