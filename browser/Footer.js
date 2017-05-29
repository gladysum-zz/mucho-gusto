import React from 'react';
import {Link} from 'react-router-dom'

const Footer = ()=>(
  <div className="footer">
      <div className="footer-col-edge"></div>
      <div className="footer-col-1">
        <div className="small-title"> Mucho Gusto</div>
          <Link to={'/faqs'} id="footer-link">FAQS</Link><br/>
          <Link to={'/team'}id="footer-link">Team</Link><br/>
          <Link to={'/contact'}id="footer-link">Contact</Link>
        <div className="copyright">
          © 2017 Gladys Um
        </div>

      </div>

      <div className="footer-col-2">
        <div className="small-title">Connect</div>
        <a href="https://www.linkedin.com/in/gladysum/" target="_blank" id="footer-link">
          LinkedIn
        </a><br/>
        <a href="https://github.com/gladysum" target="_blank" id="footer-link">
          GitHub
        </a>
      </div>

      <div className="footer-col-3">
        <img src="./images/penguin-computer.jpg" style={{width: "190px", height: "120px"}}/>
      </div>

      <div className="footer-col-edge"></div>
  </div>
)

export default Footer;