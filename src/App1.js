import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import App from './components/App.jsx';

const App1 = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
    <App>
  </MuiThemeProvider>
);

export default App1; 

