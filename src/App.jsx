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
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>This Is A Title</h1>
        <ChatBar currentUser={this.state.currentUser} />
        <MessageList messages={this.state.messages} />
      </div>);
  }
}
export default App;
