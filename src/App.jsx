import React, {Component} from 'react';
import ChatBar from './chatbar.jsx';
import MessageList from './messagelist.jsx';

class App extends Component {

  constructor(props) {
    super(props);
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
    this.setState({ messages: this.state.messages.concat(newMessage) })
  }

  render() {
    return (
      <div>
        <ChatBar currentUser={ this.state.currentUser } getMessage={ this.addMessage } />
        <MessageList messages={ this.state.messages } />
      </div>);
  }

  componentDidMount() {
  console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
}

}
export default App;
