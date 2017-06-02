import React from 'react';
import {Link} from 'react-router-dom'

export default class FAQS extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
  <div className="faqs-background">
    <div className="faqs-col-left"></div>
    <div className="faqs-col-middle">
      <div className="faqs-title">
      Frequently Asked Questions
      </div>
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
          <div className="question">
            How do I start chatting with Paco?
          </div>
          <div className="answer">
            Go to the menu icon on the top-right corner and select "CHAT".
          </div>
          <div className="question">
            What kinds of topics does Paco enjoy talking about?
          </div>
          <div className="answer">
            Paco enjoys talking about a wide variety of topics. Try chatting him up the way you'd chat up a cool dude at a meetup or party. For example, you could ask Paco "¿De dónde eres?" or ask him about his interests: "¿Cuál es tu pasatiempo favorito?" or "¿Cuál es tu libro favorito?"
          </div>
      </div>
    </div>
    <div className="faqs-col-right"></div>
  </div>
    )
  }
}
