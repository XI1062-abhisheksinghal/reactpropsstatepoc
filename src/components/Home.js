import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';
 
export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
 
  async login() {
    this.props.authService.login('/');
  }
 
  async logout() {
    this.props.authService.logout('/');
  }
 
  render() {
    if (this.props.authState.isPending) return <div>Loading...</div>;
    return this.props.authState.isAuthenticated ?
      <button onClick={this.logout}>Logout</button> :
      <button onClick={this.login}> Hello pls Login</button>;
  }
});