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
        Want to get in touch with me? Wanna collab? Send me your questions or requests using one of the emails below.
      </div>
      <div className="contact-links">
        <div className="contact-col">
          LinkedIn<br/>
          linkedin.com/in/gladysum/
        </div>

        <div className="contact-col">
          GitHub<br/>
          github.com/gladysum
        </div>

        <div className="contact-col">
          Email<br/>
          gladysum (at) gmail (dot) com
        </div>
      </div>
    </div>

    <div className="contact-col-right">
    </div>


  </div>
)

export default Contact;