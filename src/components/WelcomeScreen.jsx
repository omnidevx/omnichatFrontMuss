import React, { Component } from 'react';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };
  }

  usernameChanged(e) {
    this.setState({
      username: e.target.value
    });
  }

  submitMessage() {
    this.props.setUsername(this.state.username);
  }

  render() {
    return (
      <div className="inputBox">
        <input type="text" name="username" onChange={this.usernameChanged.bind(this)} placeholder="Dein Nutzername" />
        <input type="button" value="Senden" onClick={this.submitMessage.bind(this)} />
      </div>
    );
  }
}

export default WelcomeScreen;
