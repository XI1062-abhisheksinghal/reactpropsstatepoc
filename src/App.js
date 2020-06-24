import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Button from '@material-ui/core/Button';
import Navbar from './components/Layout/Navbar';
import Home from './components/Home';

import Login from './components/auth/Login';

//import './App.css';
import Tableg from './components/Tableg';

import * as pdfMake from 'pdfmake/build/pdfmake.js';


 var pdfFonts = require('pdfmake/build/vfs_fonts.js');
 pdfMake.vfs = pdfFonts.pdfMake.vfs; 

function onAuthRequired({ history }) {
  history.push('/login');
}


var docDefinition = {
  content: [
    // if you don't need styles, you can use a simple string to define a paragraph
    'This is a standard paragraph, using default style',

    // using a { text: '...' } object lets you set styling properties
    { text: 'This paragraph will have a bigger font', fontSize: 15 },

    // if you set the value of text to an array instead of a string, you'll be able
    // to style any part individually
    {
      text: [
        'This paragraph is defined as an array of elements to make it possible to ',
        { text: 'restyle part of it and make it bigger ', fontSize: 15 },
        'than the rest.'
      ]
    }
  ]
};

class App extends Component {

  dowloadData=()=> {

		//clear all the rows from the table 
		console.log("inside downlaod");
    pdfMake.createPdf(docDefinition).download();
	}
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
        
        <div>
        <Button onClick={this.dowloadData } >
         Click me to download!!
        </Button>
        </div>
      </Router>
    );
  }
}

export default App;