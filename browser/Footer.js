import React from 'react';
import {Link} from 'react-router-dom'

const Footer = ()=>(
  <div className="footer">
    <div className="footer-content">
      <div className="footer-col-edge"></div>
      <div className="footer-col-1">
        <div className="small-title"> Mucho Gusto</div>
        <p className="footer-link-internal">
          <Link to={'/faqs'}>FAQS</Link><br/>
          <Link to={'/team'}>TEAM</Link><br/>
          <Link to={'/contact'}>CONTACT</Link>
        </p>
        <div className="copyright">
          © 2017 Gladys Um
        </div>

      </div>

      <div className="footer-col-2">
        <div className="small-title">Connect</div>
        LinkedIn<br/>
        GitHub
      </div>

      <div className="footer-col-3">
        <img src="./images/penguin-computer.jpg" style={{width: "190px", height: "120px"}}/>
      </div>

      <div className="footer-col-edge"></div>
    </div>
  </div>
)

export default Footer;