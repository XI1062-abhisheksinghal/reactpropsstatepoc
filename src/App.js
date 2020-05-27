import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/Layout/Navbar';
import Home from './components/Home';

import Login from './components/auth/Login';

//import './App.css';
import Tableg from './components/Tableg';

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-992970.okta.com/oauth2/default"
          client_id="0oa3wxojag8uGAf0t357"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}>

          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/TableData" exact={true} component={Tableg} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-992970.okta.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;