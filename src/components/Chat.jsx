import React from 'react';
import socketio from 'socket.io-client';
import Message from './Message';
import InputBox from './InputBox';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderName: 'sender',
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

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit('message', {
        senderName: this.state.senderName,
        body: this.state.body
      });
      this.setState({ message: '' });
    };
  }

  render() {
    return (
      <div>
        {this.state.messages.map((message, i) => {
          return <Message senderName={message.senderName} body={message.body} />;
        })}
        <InputBox />
      </div>
    );
  }
}

export default Chat;
