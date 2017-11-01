import React, {Component} from 'react';

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // const messageContent = {this.props.messages.content}.map(())

  render() {
    const lists = this.props.messages.map((m) => {
      return <li>{m.content}</li>;
    });

    return (
      <ul>
        { lists }
      </ul>
    );
  }
}

export default MessageList;