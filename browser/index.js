'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import Chat from './Chat';
import Home from './Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <Chat />
  </MuiThemeProvider>,
  document.getElementById('app')
);