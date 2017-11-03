import React from 'react';
import UserCount from './UserCount.jsx';

class NavBar extends React.Component {
  render() {
    return (
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="NavBar-content">{ this.props.content }</span>
          <UserCount userCount={ this.props.userCount } />
        </nav>
    )
  }
}

export default NavBar;