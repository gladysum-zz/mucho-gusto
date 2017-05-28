import React from 'react';
import {Link} from 'react-router-dom'

const About = () => (
  <div className="about-background">
    <div className="about-title">
      Meet the Team
    </div>

    <div className="image-container">
      <img src="./images/gladys.jpg" style={{width: "330px", height: "330px"}}/>
    </div>

    <div className="about-container">
      <div className="bio">
        <p id="name">Gladys Um</p>
        <p>Fullstack software developer proficient in JavaScript, Node.js, React, React-Redux, Express.js, Sequelize, PostgreSQL, Mocha, Chai, Jasmine, HTML, and CSS.
          Interests: Artificial intelligence, natural language processing, chatbots, IBM Watson Services</p>
      </div>
    </div>

  </div>
)

export default About;