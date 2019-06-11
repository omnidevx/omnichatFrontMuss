import NavBar from './components/NavBar';
import Message from './components/Message';
import React, { Component } from 'react';

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
        <Message sender={'some sender'} body={'some body lol omfg'} />
      </div>
    );
  }
}

export default App;
