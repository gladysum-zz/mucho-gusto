import React from 'react';
import {Link} from 'react-router-dom'

const Footer = ()=>(
  <div className="footer">
    <div className="footer-content">
      <div className="footer-col"></div>
      <div className="footer-col">
        Mucho Gusto<br/>
        Team<br/>
        FAQS<br/>
        Contact
        <div className="copyright">
          © 2017 Gladys Um
        </div>

      </div>

      <div className="footer-col">
        Connect<br/>
        LinkedIn<br/>
        GitHub
      </div>

      <div className="footer-col">
        <img src="./images/penguin-computer.jpg" style={{width: "190px", height: "120px"}}/>
      </div>

      <div className="footer-col"></div>
    </div>
  </div>
)

export default Footer;