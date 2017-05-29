import React from 'react';
import {Link} from 'react-router-dom'

export default class Team extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
  <div className="about-background">
    <div className="about-col-left"></div>
    <div className="about-col-middle">
      <div className="about-title">
        Meet the Team
      </div>

      <div className="image-container-left">
        <img src="./images/gladys.jpg" style={{width: "340px", height: "340px"}}/>
      </div>

      <div className="about-container-left">
        <div className="bio-left">
          <p id="name">Gladys Um</p>
          <p>I'm a fullstack software engineer who loves working in JavaScript, Node, Express, React, React-Redux, HTML, and CSS. In addition to building apps that combine beautiful user interfaces with rigorous backend logic, I enjoy solving algorithmic problems on CodeWars and CoderByte. I have a BA in mathematics from Harvard and am fluent in Spanish and French.
            </p>
        </div>
      </div>

      <div className="spacing"></div>

      <div className="image-container-right">
        <img src="./images/penguin-square.jpg" style={{width: "280px", height: "280px"}}/>
      </div>

      <div className="about-container-right">
        <div className="bio-right">
          <p id="name">Paco</p>
          <p>Hola amigos! I'm a Spanish-language chatbot developed by Gladys Um and powered by IBM Watson Conversation Service. I love helping people practice their Spanish conversation skills. In addition to chatting on Mucho Gusto, I enjoy fishing, swimming, and chillin' on the Patagonian coast. </p>
        </div>
      </div>
    </div>
    <div className="about-col-right"></div>
  </div>
    )
  }
}

