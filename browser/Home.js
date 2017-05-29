import React from 'react';
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
  <div className="home">
    <div className="home-col-left"></div>
    <div className="home-col-middle">
      <div className="home-face-icon">
        <img src="./images/penguin-face-150.png" style={{width: "130px", height: "130px"}}/>
      </div>
      <div className="home-main-text">
        Hola amigos! I'm Paco, a Spanish-language chatbot. I was developed by Gladys Um and am powered by IBM Watson Conversation Service. Want to practice your Español?
      </div>
      <div className="chat-button-container">
        <Link to={'/chat'} className="link" id="chat-button-link">
          <div className="chat-button">
            Vamos
          </div>
        </Link>
      </div>
    </div>
    <div className="home-col-right"></div>
  </div>
    )
  }
}

