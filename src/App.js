import NavBar from './components/NavBar';
import React, { Component } from 'react';
import Chat from './components/Chat';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './components/Login';
import * as rp from 'request-promise';
import Overview from './components/Overview';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      jwt: '',
      isLoaded: false,
      client: {
        username: '',
        userId: 0,
        conversations: [1, 2, 3]
      }
    };

    this.applicationLogin();
    this.handleClient = this.handleClient.bind(this);
  }

  handleClient (clientData) {
    this.setState({
      client: clientData
    });
  }

  componentDidUpdate () {
    console.log(this.state.client);
  }

  loginOrChat () {
    if (this.state.client.username !== '') {
      // return <Chat client={this.state.client} />;
      return <Overview />;
    } else {
      return (
        <div>
          <NavBar />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <Login onLogin={this.handleClient} />
          </div>
        </div>
      );
    }
  }

  loginRequest () {
    return rp({
      method: 'POST',
      url: 'http://localhost:3131/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD
      },
      json: true
    });
  }

  // loadClient () {}

  // clientRequest () {
  //   return new Promise(resolve => {
  //     resolve({});
  //   });
  // }

  async applicationLogin () {
    try {
      const res = await this.loginRequest();
      this.setState({ jwt: res });
    } catch (error) {
      alert('application couldnt login.');
    }
  }

  render () {
    return (
      <div>
        {this.loginOrChat()}
      </div>
    );
  }
}

export default App;
