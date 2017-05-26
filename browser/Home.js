import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Home = () => (
  <div className="home">
    <div className="home-col-left"></div>
    <div className="home-col-middle">
      <div className="home-face-icon">
        <img src="./images/penguin-face-150.png" style={{width: "150px", height: "150px"}}/>
      </div>
      <div className="home-main-text">
        Hola amigos! I'm Paco, a Spanish-language chatbot. I was developed by Gladys Um and am powered by IBM Watson Conversation Service. Want to practice your Español?
      </div>
      <div className="home-button-container">
        <FlatButton className="chat-button" label="Vamos a charlar"/>
      </div>
    </div>
    <div className="home-col-right"></div>
  </div>
)

export default Home;