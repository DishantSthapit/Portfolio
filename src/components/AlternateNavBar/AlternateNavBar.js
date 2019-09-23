import React from 'react';
import "./index.css";
import socialIcons from "./../../json/socialIcons"

export default class AlternateNavBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
	}

  render() {
      const data = socialIcons.map(item => {
        return <div className="alt-nav-item"  key={item.key}>
                <a href={item.link} target="blank">
                    <img className="alt-nav-item-icon grow" src={item.icon}></img>
                </a>
            </div>

      })


    return (
            <div className="alt-nav-icon-wrapper"> 
                {data}
            </div>
    );
  }
}
