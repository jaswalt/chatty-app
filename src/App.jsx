import React, {Component} from 'react';
import ChatBar from './chatbar.jsx';

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
        <h1></h1>
        <ChatBar currentUser={this.state.currentUser} />
      </div>);
  }
}
export default App;
