import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,useHistory} from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Button from '@material-ui/core/Button';
import Navbar from './components/Layout/Navbar';
import Home from './components/Home';
import Tableg from './components/Tableg';
import * as pdfMake from 'pdfmake/build/pdfmake.js';


 var pdfFonts = require('pdfmake/build/vfs_fonts.js');
 pdfMake.vfs = pdfFonts.pdfMake.vfs; 

 
var docDefinition = {
  watermark: { text: 'PDFMAKE', color: 'blue', opacity: 0.1, bold: true, italics: false },
  footer: {
    columns: [
      'Left part',
      { text: 'Right part', alignment: 'right' }
    ]
  },
content: [
    { text: 'This is a header', style: 'header',margin: [ 5, 2, 10, 20 ]  },
    'No styling here, this is a standard paragraph',
    { text: 'Another text', style: 'anotherStyle' },
    { text: 'Multiple styles applied', style: [ 'header', 'anotherStyle' ] }
  ],
styles: {
    header: {
      fontSize: 22,
      bold: true
    },
    anotherStyle: {
      italics: true,
      alignment: 'center'
    }
  }
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
          issuer="https://dev-992970.okta.com/oauth2/default/"
          client_id="0oa3wxojag8uGAf0t357"
          redirect_uri={window.location.origin + '/implicit/callback'}>
          

          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/TableData" exact={true} component={Tableg} />
              <Route path="/implicit/callback" component={Tableg} />
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