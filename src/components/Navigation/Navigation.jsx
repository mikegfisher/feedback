import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <ul>
          <li><Link to={routes.HOME}>Home</Link></li>
          {!this.props.user.uid && (<li><Link to={routes.LOGIN}>Log in</Link></li>)}
          {this.props.user.uid && (<li><Link to={routes.ACCOUNT}>Account</Link></li>)}
        </ul>
      </div>
    );
  }
}
export default Navigation;
