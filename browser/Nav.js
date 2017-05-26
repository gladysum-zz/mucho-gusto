import React from 'react';
import {Link} from 'react-router-dom'

const Nav = ()=>(
  <div className="nav">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/chat">Chat</Link></li>
    </ul>
  </div>
)

export default Nav;

