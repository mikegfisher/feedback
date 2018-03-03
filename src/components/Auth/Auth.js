import React, { Component } from 'react';
import fire, { db } from '../fire';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: null };
  }
  componentWillMount() {
  }
  render() {
    return (<div />);
  }
}
export default Auth;
