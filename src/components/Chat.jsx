import React from 'react';
import socketio from 'socket.io-client';
import Message from './Message';
import InputBox from './InputBox';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderName: this.props.username,
      body: 'body',
      messages: []
    };

    this.socket = socketio('localhost:3133');

    this.socket.on('message', function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.sendMessage = msg => {
      //this.preventDefault();
      this.setState({
        body: msg
      });
      console.log(msg);
      console.log(this.state.body);
      this.socket.emit('message', {
        senderName: this.state.senderName,
        body: msg
      });
      this.setState({ message: '' });
    };
  }

  render() {
    return (
      <div>
        {this.state.messages.map((message, i) => {
          return <Message senderName={message.senderName} body={message.body} myName={this.state.senderName} />;
        })}
        <InputBox submitMessage={this.sendMessage.bind(this)} />
      </div>
    );
  }
}

export default Chat;
