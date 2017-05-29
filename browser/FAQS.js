import React from 'react';
import {Link} from 'react-router-dom'

const About = () => (
  <div className="faqs-background">
    <div className="faqs-title">
    Frequently Asked Questions
    </div>
    <div className="faqs-col-left"></div>
    <div className="faqs-col-middle">
      <div className="faqs-container">

          <div className="question">
            What is Mucho Gusto?
          </div>
          <div className="answer">
            Mucho Gusto is a language-learning app that uses artifical intelligence. It's powered by IBM Watson Conversation Service, which provides natural language processing capabilities.
          </div>
          <div className="question">
            What is Paco?
          </div>
          <div className="answer">
            I'm a penguin. I'm also a Spanish-language chatbot. I'm here to help you practice your Spanish conversation skills.
          </div>
      </div>
    </div>
    <div className="faqs-col-right"></div>
  </div>
)

export default About;