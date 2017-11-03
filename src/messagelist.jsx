import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // const messageContent = {this.props.messages.content}.map(())
  // <div class="message system">
  //   Anonymous1 changed their name to nomnom.
  // </div>

  render() {
    return (
      <main className="messages">
        { this.props.messages.map( message => {
          console.log(message)
          if (message.type === 'NAME_CHANGE') {
            return <Notification key={ message.id } oldUsername={ message.oldUsername } newUsername={ message.newUsername } />;
          } else {
            return <Message key={ message.id } username={ message.username } content={ message.content } />
          } }) }
      </main>
    );
  }
}

export default MessageList;