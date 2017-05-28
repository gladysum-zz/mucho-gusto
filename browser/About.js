import React from 'react';
import {Link} from 'react-router-dom'

const About = () => (
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
          <p>Fullstack software developer proficient in JavaScript, Node.js, React, React-Redux, Express.js, Sequelize, PostgreSQL, Mocha, Chai, Jasmine, HTML, and CSS.
            Interests: Artificial intelligence, natural language processing, chatbots, IBM Watson Services</p>
        </div>
      </div>

      <div className="spacing"></div>

      <div className="image-container-right">
        <img src="./images/penguin-square.jpg" style={{width: "340px", height: "340px"}}/>
      </div>

      <div className="about-container-right">
        <div className="bio-right">
          <p id="name">Paco</p>
          <p>Fullstack software developer proficient in JavaScript, Node.js, React, React-Redux, Express.js, Sequelize, PostgreSQL, Mocha, Chai, Jasmine, HTML, and CSS.
            Interests: Artificial intelligence, natural language processing, chatbots, IBM Watson Services</p>
        </div>
      </div>
    </div>
    <div className="about-col-right"></div>
  </div>
)

export default About;