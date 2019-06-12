import React, { Component } from 'react';

class InputBox extends Component {
  // constructor(props) {
  //   super(props);
  // }

  sendMessage(e) {
    console.log(e.target.message);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="message" />
          <input type="button" value="Send!" onClick={this.sendMessage.bind(this)} />
        </form>
      </div>
    );
  }
}

export default InputBox;
