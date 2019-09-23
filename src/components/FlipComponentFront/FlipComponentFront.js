import React from 'react';
// import "./index.css";

class FlipComponentFront extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
    };
  }
 
    render() {
      return (
        <div className="experience-text-wrapper">
          <div className="experience-tw-heading">{this.props.title}</div>
            <div className="experience-tw-content-wrapper">
              <div className="experience-tw-content">{this.props.responsibilities}</div>
              <div className="experience-tw-content">{this.props.time}</div>
              <div className="experience-tw-content">{this.props.skills}</div>
              <button onClick={this.props.handleClick}>Find out more</button>
          </div>
      </div>
      )
    }
  }

export default FlipComponentFront;
