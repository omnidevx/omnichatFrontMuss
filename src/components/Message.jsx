import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../index.css'

class Message extends Component {

  render() {
    return (
      <Card className="card">
        <CardContent>
          <Typography className="typo" color="textSecondary" gutterBottom>
            {this.props.sender}
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

export default Message;
