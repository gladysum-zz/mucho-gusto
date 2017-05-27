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
    <div className="nav-col-right">
      <div className="dropdown">
        <button className="dropbtn">=</button>
        <div className="dropdown-content">
          <a href="#">HOME</a>
          <a href="#">CHAT</a>
        </div>
      </div>

    </div>
  </div>
)

export default Nav;

