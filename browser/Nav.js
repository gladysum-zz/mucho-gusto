import React from 'react';
import {Link} from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';


const Nav = ()=>(
  <div className="nav">
    <div className="nav-col-left">
      <Link to={'/'} className="link" id="home-link">
        MUCHO GUSTO
      </Link>
    </div>
    <div className="nav-col-right">IconMenu</div>
  </div>
)

export default Nav;

