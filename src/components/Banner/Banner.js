import React from 'react';
import './index.css';

class Banner extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
	}

  render() {
    return(
		<div className="banner-wrapper">
      <div className="banner-name">
          <div id="js-container">
            <h1 className="intro-name">Dishant Sthapit</h1>
            <h1 className="intro-name">Dishant Sthapit</h1>
            <h1 className="intro-name">Dishant Sthapit</h1>
          </div>
          <div id="container-1">
            <h1 className="intro-title">Frontend Developer</h1>
            <h1 className="intro-title">Frontend Developer</h1>
            <h1 className="intro-title">Frontend Developer</h1>
          </div>
          <div className="short-intro">I am working as a Frontend Developer with a Bachelor of Information and Communication Technology from Western Sydney University with local and professional experience looking forward to establish my future career</div>
          <div className="contact-wrapper">
              <div className="contact-icon-wrapper">
                  <a className="email-icon" href={this.props.email}>Contact</a>
              </div>
              <div className="contact-icon-wrapper">
                  <a className="phone-icon" href={this.props.phone}>Call</a>
              </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Banner;