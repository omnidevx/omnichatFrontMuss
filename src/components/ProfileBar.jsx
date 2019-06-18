import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../index.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Avatar } from '@material-ui/core';

class ProfileBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Avatar src="https://picsum.photos/200" style={{ 'margin-right': 10 }} />
            <Typography variant="h6" component="h5">
              Jonas Schultheiss
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default ProfileBar;
