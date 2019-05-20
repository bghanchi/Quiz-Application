/*import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MyAwesomeReactComponent from './MyAwesomeReactComponent';
//import AppBarExampleIcon from './AppBarExampleIcon';
import app from './components/App.jsx';
 

const App = () => (
  <MuiThemeProvider>
       <app/>
   </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/



 
import registerServiceWorker from './registerServiceWorker';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBarExampleIcon from './AppBarExampleIcon';
//import TabsExampleControlled from './components/TabsExampleControlled';

const Main = () => (
  <MuiThemeProvider>
    <App/>
    </MuiThemeProvider>
);


ReactDOM.render(
   <Main />,
   document.getElementById('root')
 );

 registerServiceWorker();






/*import React, { Component } from 'react';
import registerServiceWorker from './registerServiceWorker';
//import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from 'material-ui/styles/MuiThemeProvider';
 





ReactDOM.render(<App/>, document.getElementById('root'));
 registerServiceWorker();
*/