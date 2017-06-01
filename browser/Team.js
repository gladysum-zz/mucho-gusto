import React from 'react';

export default class Team extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
  <div className="team-background">
    <div className="team-col-left"></div>
    <div className="team-col-middle">
      <div className="team-title">
        Meet the Team
      </div>

      <div className="bio">
        <img src="./images/gladys.jpg" id="bio-pic"/>
        <a href="https://www.linkedin.com/in/gladysum/" target="_blank" id="bio-name">
          Gladys Um
        </a>
        <div id="bio-text"> I'm a fullstack software engineer who loves working in JavaScript, Node, Express, React, React-Redux, HTML, and CSS. I enjoy building apps that combine beautiful user interfaces with rigorous backend logic. I have a BA in mathematics from Harvard and an MA in Romance Languages from Princeton. I am fluent in Spanish and French.
        </div>
      </div>

      <div className="bio">
        <img src="./images/penguin-square.jpg" id="bio-pic"/>
        <div id="bio-name">
          Paco
        </div>
        <div id="bio-text">
          ¡Hola amigos! I'm a Spanish-language chatbot developed by Gladys Um and powered by IBM Watson Conversation Service. I love helping people practice their Spanish conversation skills. In addition to chatting on Mucho Gusto, I enjoy fishing, swimming, and chillin' on the Patagonian coast.
        </div>
      </div>
    </div>
    <div className="team-col-right"></div>
  </div>
    )
  }
}

