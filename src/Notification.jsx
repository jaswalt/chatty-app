import React, {Component} from 'react';

class Notification extends Component {
  render() {
    return (
        <div className="message">
          <span className="message-username">{ this.props.oldUsername }</span>
            changed their name to
          <span className="message-content">{ this.props.newUsername }</span>
        </div>
    )

  }

}




export default Notification;