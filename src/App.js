import NavBar from './components/NavBar';
import React, { Component } from 'react';
import Chat from './components/Chat';
import WelcomeScreen from './components/WelcomeScreen';

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
      },
      username: ''
    };
  }

  setUsername (e) {
    this.setState({
      username: e
    });
  }

  showWelcomeScreenOrChat () {
    console.log(this.state.username);
    if (this.state.username !== '') {
      return <Chat username={this.state.username} />;
    } else {
      return <WelcomeScreen setUsername={this.setUsername.bind(this)} />;
    }
  }

  render () {
    return (
      <div>
        <NavBar />
        {this.showWelcomeScreenOrChat()}
      </div>
    );
  }
}

export default App;
