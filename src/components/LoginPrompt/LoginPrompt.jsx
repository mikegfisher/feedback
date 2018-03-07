import React, { Component } from 'react';

class LoginPrompt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {
          !this.props.user.uid && (
            <div>
              <span role="img" aria-label="Wave">👋</span> Hey there! Ready to start submitting feedback? <a href="/login">LOG IN</a>
            </div>
          )
        }
      </div>
    );
  }
}
export default LoginPrompt;
