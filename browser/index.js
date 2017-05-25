'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Chat from './Chat';
import Home from './Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/chat" component={Chat}/>
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('app')
);