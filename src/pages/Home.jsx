import React, { Component } from 'react';
import fire, { db } from '../fire';
import LoginPrompt from '../components/LoginPrompt/LoginPrompt';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
      return (
        <div>
          <LoginPrompt user={this.props.user} />
          <h1>Feedback!</h1>
        </div>
      );
    }
}
export default HomePage;
