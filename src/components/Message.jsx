import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Message extends Component {
  classes = {
    card: {
      minWidth: 275
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    time: {
      marginBottom: 12,
      paddingRight: 10,
      pattingBottom: 10,
      
    }
  };

  render() {
    return (
      <Card className={this.classes.card}>
        <CardContent>
          <Typography className={this.classes.title} color="textSecondary" gutterBottom>
            {this.props.sender}
          </Typography>
          <Typography variant="body2" component="p">
            {this.props.body}
          </Typography>
          <Typography className={this.classes.time} color="textSecondary">
            {new Date().toLocaleTimeString()}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Message;
