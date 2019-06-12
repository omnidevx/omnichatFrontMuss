import NavBar from './components/NavBar';
import Message from './components/Message';
import React, { Component } from 'react';
import Chat from './components/Chat';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        name: ''
      },
      chat: {
        onlineUsers: 0,
        messages: [
          {
            sender: 'ich',
            body: 'first message'
          },
          {
            sender: 'ich',
            body: 'first message'
          }
        ]
      }
    };
  }

  render () {
    return (
      <div>
        <NavBar />
        <Chat />
      </div>
    );
  }
}

export default App;
