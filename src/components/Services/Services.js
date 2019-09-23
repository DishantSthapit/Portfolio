import React from 'react';
import "./index.css";
import serviceData from "./../../json/serviceData"
class Services extends React.Component {yarn 
  constructor(props) {
      super(props);
      this.state = {
      };
	}

  render() {     
    return(
        <div className="services-overview-wrapper">
            <div className="section-heading">SERVICES</div>
            <div className="services-content-wrapper">
                {serviceData.map((item) => {
                    return <div className="service-item-wrapper" key={item.key}>
                                <div className="service-image-wrapper">
                                    <img src={item.image} className="service-image"></img>
                                    <div className="service-description-wrapper">
                                        <div className="service-description-title">{item.title}</div>
                                        <div className="service-description">{item.description}</div>
                                    </div>
                                </div>
                            </div>

                })}
            </div>
        </div>
    );
  }
}

export default Services;