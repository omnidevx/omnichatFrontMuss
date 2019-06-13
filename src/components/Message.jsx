import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../index.css';

class Message extends Component {
  render() {
    if (this.props.senderName !== this.props.myName) {
      return (
        <Card className="card itsNotMe">
          <CardContent>
            <Typography className="typo" color="textSecondary" gutterBottom>
              {this.props.senderName}
            </Typography>
            <Typography variant="body2" component="p">
              {this.props.body}
            </Typography>
            <Typography className="time" color="textSecondary">
              {new Date().toLocaleTimeString()}
            </Typography>
          </CardContent>
        </Card>
      );
    } else {
      return (
        <Card className="card itsMe">
          <CardContent>
            <Typography className="typo" color="textSecondary" gutterBottom>
              {this.props.senderName}
            </Typography>
            <Typography variant="body2" component="p">
              {this.props.body}
            </Typography>
            <Typography className="time" color="textSecondary">
              {new Date().toLocaleTimeString()}
            </Typography>
          </CardContent>
        </Card>
      );
    }
  }
}

export default Message;
