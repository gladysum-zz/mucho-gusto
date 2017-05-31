import React from 'react';
import {Link} from 'react-router-dom'

export default class Contact extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
  <div className="contact-background">

    <div className="contact-col-left">
    </div>

    <div className="contact-col-middle">
      <div className="contact-info">
        <div className="contact-title">
          Contact Gladys
        </div>
        <div className="contact-text">
          Want to collaborate? Want to learn more about me? <br/> Connect with me via any of the channels below.
        </div>
        <div className="contact-links">
          <div className="contact-col">
            <div className="social">
              Email
            </div>
            gladysum (at) gmail (dot) com
          </div>
          <div className="contact-col">
            <a href="https://www.linkedin.com/in/gladysum/" target="_blank" className="social">
              LinkedIn
            </a><br/>
            linkedin.com/in/gladysum/
          </div>
          <div className="contact-col">
            <a href="https://github.com/gladysum" target="_blank" className="social">
              GitHub
            </a><br/>
            github.com/gladysum
          </div>
        </div>
      </div>
    </div>

    <div className="contact-col-right">
    </div>
  </div>
    )
  }
}

