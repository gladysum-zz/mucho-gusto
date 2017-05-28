import React from 'react';
import {Link} from 'react-router-dom'

const Contact = () => (
  <div className="contact-background">

    <div className="contact-col-left">
    </div>

    <div className="contact-col-middle">
      <div className="contact-me">
        Contact Me
      </div>
      <div className="contact-text">
        Want to collaborate? Want to learn more about me? <br/> Connect with me via any of the channels below.  I'd love to hear from you!
      </div>
      <div className="contact-links">
        <div className="contact-col">
          <div className="social">
            <a href="https://www.linkedin.com/in/gladysum/" target="_blank">
              LinkedIn
            </a>
          </div>
          linkedin.com/in/gladysum/
        </div>

        <div className="contact-col">
          <div className="social">
            <a href="https://github.com/gladysum" target="_blank">
              GitHub
            </a>
          </div>
          github.com/gladysum
        </div>

        <div className="contact-col">
          <div className="social">
            Email
          </div>
          gladysum (at) gmail (dot) com
        </div>
      </div>
    </div>

    <div className="contact-col-right">
    </div>


  </div>
)

export default Contact;