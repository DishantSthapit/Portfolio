import React from 'react';
import "./index.css";
import dishant from './../../img/dishant.png'; 


class About extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
	}

  render() {
    return(
        <div id="about"className="about-wrapper"> 
            <div className="text-wrapper container">
                <div className="section-heading">ABOUT</div>
                <div className="about-main-image-wrapper">
                    <img className="am-image"src={dishant}></img>
                </div>
                <div className="about-item">Hi, I am Dishant, I work as a Junior Software Engineer at Bigtincan. I believe that hardwork and commitment are the major factors in life. As a detail oriented person, with fast learning and communication skills, I can carry out a wide variety of development tasks with of multiple software responsibly and accurately.</div>
            </div>
            <div className="hr-line"></div>
         </div>
    );
  }
}

export default About;