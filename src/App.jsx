import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import UserCount from './UserCount.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.socket = undefined;
    this.state = {
      currentUser: null,
      messages: [], // messages coming from the server will be stored here as they arrive
      userCount: 0
    };
  }

  addMessage = (username, message) => {
    let newMessage = {
      username: username || "Anonymous",
      content: message,
      type: "USER_MESSAGE"
    };
    this.socket.send(JSON.stringify(newMessage));
  }

  sendNewUsername = (username) => {
    let notification = {
      oldUsername: this.state.currentUser || "Anonymous",
      newUsername: username || "Anonymous",
      type: "NAME_CHANGE"
    }

    const messages = this.state.messages.concat(notification)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
    this.setState({currentUser: username})
    this.socket.send(JSON.stringify(notification));
  }

  render() {
    return (
      <div>
        <NavBar userCount={ this.state.userCount } />
        <MessageList messages={ this.state.messages } />
        <ChatBar
          currentUser={ this.state.currentUser }
          getMessage={ this.addMessage }
          onNewUsername={ this.sendNewUsername }
        />
      </div>);
  }

  handleWSMessageReceived = (newMessage) => {
    newMessage = JSON.parse(newMessage.data);
    const stateToUpdate = {};

    if (newMessage.type === 'USER_COUNT') {
      stateToUpdate.userCount = newMessage.count;
    } else {
      const newMessages = this.state.messages.concat(newMessage);
      stateToUpdate.messages = newMessages;
      stateToUpdate.currentUser = this.state.currentUser;
    }

    this.setState(stateToUpdate);
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = function () {
      console.log("Connected to server");
    }
    this.socket.onmessage = this.handleWSMessageReceived
    //this.socket.addEventListener('message', this.handleWSMessageReceived)

    console.log("componentDidMount <App />");
  }

}
export default App;
