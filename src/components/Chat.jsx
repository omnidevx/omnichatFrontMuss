import React from 'react';
import socketio from 'socket.io-client';
import Message from './Message';
import InputBox from './InputBox';
import { makeStyles } from '@material-ui/core';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderName: this.props.username,
      body: 'body',
      messages: [
        { senderName: 'gg', body: 'texdfhdfhfdgdfgdfgdfgdfgdfgdfgdfg dfg dfg dfgdfg dfgdfg dfg dfg dfg dfg t1' },
        { senderName: 'gg2', body: 'text2' },
        { senderName: 'gg3', body: 'text3' }
      ]
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

  drawerWidth = 240;

  useStyles = makeStyles(theme => ({
    root: {
      display: 'flex'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: this.drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      marginLeft: this.drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${this.drawerWidth}px)`
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: this.drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  }));

  render() {
    let classes = makeStyles();
    return (
      <main className={classes.appBar}>
        {/* {this.state.messages.map((message, i) => {
          return <Message senderName={message.senderName} body={message.body} myName={this.state.senderName} />;
        })}
        <InputBox submitMessage={this.sendMessage.bind(this)} /> */}
        <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
          {this.state.messages.map((message, index) => {
            return <Message senderName={message.senderName} myName="gg2" body={message.body} />;
          })}
        </div>
        <InputBox />
      </main>
    );
  }
}

export default Chat;
