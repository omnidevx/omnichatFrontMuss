import React, { Component } from 'react';
import { Fab, AppBar, TextField, Toolbar, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  messageChanged(e) {
    this.setState({
      message: e.target.value
    });
  }

  submitMessage() {
    this.props.submitMessage(this.state.message);
    this.setState({
      message: ''
    });
  }
  drawerWidth = 240;

  useStyles = makeStyles(theme => ({
    appBar: {
      marginLeft: this.drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${this.drawerWidth}px)`
      }
    }
  }));

  render() {
    let classes = makeStyles();
    return (
      <div className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <TextField label="Multiline" multiline rowsMax="3" margin="normal" />
            </Grid>
            <Grid item xs={2}>
              <Fab color="primary">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
          {/* <input type="text" name="message" value={this.state.message} onChange={this.messageChanged.bind(this)} placeholder="Deine Nachricht" /> */}
          {/* <input type="button" value="Senden" onClick={this.submitMessage.bind(this)} /> */}
        </Toolbar>
      </div>
    );
  }
}

export default InputBox;
