'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Background from './Background';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <Background />
  </MuiThemeProvider>,
  document.getElementById('app')
);