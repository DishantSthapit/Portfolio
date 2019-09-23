import React from 'react';
// import "./index.css";

class FlipComponentBack extends React.Component {
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
                <div className="experience-tw-content">{this.props.summary1}</div>
                <div className="experience-tw-content">{this.props.summary2}</div>
                <div className="experience-tw-content">{this.props.summary3}</div>
                <button onClick={this.props.handleClick}>Click to flip</button>
            </div>
        </div> 
      )
    }
  }

export default FlipComponentBack;
