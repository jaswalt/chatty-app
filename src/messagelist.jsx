import React, {Component} from 'react';

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // const messageContent = {this.props.messages.content}.map(())

  render() {
    const messages = this.props.messages.map((m) => {
      //return <li key={m.id}><h3>{m.username}</h3>{m.content}</li>;

      return (
        <div key={ m.id } className="message">
          <span className="message-username">{ m.username }</span>
          <span className="message-content">{ m.content }</span>
        </div>
      );

    });

    return (
      <main className="messages">
        { messages }
      </main>
    );
  }
}

export default MessageList;