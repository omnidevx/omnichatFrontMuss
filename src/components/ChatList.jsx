import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { Avatar, Divider } from '@material-ui/core';

class ChatList extends Component {
  constructor() {
    super();
    this.state = {
      chats: [
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat a',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat b',
          pictureUri: 'https://picsum.photos/128/128'
        },
        {
          title: 'chat c',
          pictureUri: 'https://picsum.photos/128/128'
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <List>
          <ListItem button>
            <Avatar
              src={'https://picsum.photos/200'}
              style={{
                'margin-right': 10,
                width: 60,
                height: 60
              }}
            />
            <ListItemText primary={'global chat'} />
          </ListItem>
          <Divider />
          {this.state.chats.map((chat, index) => (
            <ListItem button key={chat.title}>
              <Avatar src={chat.pictureUri} style={{ 'margin-right': 10, width: 60, height: 60 }} />
              <ListItemText primary={chat.title} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
export default ChatList;
