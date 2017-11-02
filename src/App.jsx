import React, {Component} from 'react';
import ChatBar from './chatbar.jsx';
import MessageList from './messagelist.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.socket = undefined;
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }

  addMessage = (message) => {
    let newMessage = {
      id: new Date().getUTCMilliseconds(),
      username: "Anonymous",
      content: message
    };
    this.socket.send(JSON.stringify(newMessage));
    //this.setState({ messages: this.state.messages.concat(newMessage) })
    // Send message to server and display in terminal
    //this.message.send = (event) => {
    //  console.log(newMessage);
    //}
  }

  render() {
    return (
      <div>
        <ChatBar currentUser={ this.state.currentUser } getMessage={ this.addMessage } />
        <MessageList messages={ this.state.messages } />
      </div>);
  }

  handleWSMessageReceived = (newMessage) => {
    newMessage = JSON.parse(newMessage.data)
    this.setState({ messages: this.state.messages.concat(newMessage) })
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = function () {
      console.log("Connected to server");
    }
    this.socket.onmessage = this.handleWSMessageReceived
    //this.socket.addEventListener('message', this.handleWSMessageReceived)

    console.log("componentDidMount <App />");
    /*setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);*/
  }

}
export default App;
