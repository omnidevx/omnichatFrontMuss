import React, { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  messageChanged(e) {
    this.setState({
      message: e.target.value
    });
  }

  submitMessage() {
    this.props.submitMessage(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div className="inputBox">
        <input type="text" name="message" value={this.state.message} onChange={this.messageChanged.bind(this)} placeholder="Deine Nachricht" />
        <input type="button" value="Senden" onClick={this.submitMessage.bind(this)} />
      </div>
    );
  }
}

export default InputBox;
