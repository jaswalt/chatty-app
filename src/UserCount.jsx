import React from 'react';

class UserCount extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let userCount = this.props.userCount;
    let displayMessage = "users online";

    if (userCount < 2) {
      displayMessage = "user online";
    }

    return (
      <div className="user-count">
        <h4>{ userCount } { displayMessage }</h4>
      </div>
    );
  }
}

export default UserCount;