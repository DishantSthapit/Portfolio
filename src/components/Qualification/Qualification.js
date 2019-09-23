import React from 'react';
import "./index.css";
import qualificationData from "./../../json/qualificationData"


class Qualification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	  }
  
	render() {
		return (
			<div class="container">
				<div className="section-heading">Qualification</div>
				{qualificationData.map((item) => {
					return (
						<div className="qualification-outer-wrapper" key={item.id}>
							<div className="qualification-image-wrapper">
								<img class="qualification-iw-image" src={item.image} />
							</div>	
							<div className="qualification-text-wrapper">
								<div className="qualification-tw-heading">{item.title}</div>
								<div className="qualification-tw-content-wrapper">
									<div className="qualification-tw-outer-content">{item.description.name}</div>
									<div className="qualification-tw-outer-content">{item.description.duration}</div>
									<div className="qualification-tw-inner-content"><b>Core Subjects</b> : {item.description.subjects}</div>
									{item.description.achievements ? (<div className="qualification-tw-inner-content"><b>Achievements</b> : {item.description.achievements}</div>): ""}
								</div>
							</div>
						</div>
					)

				})
				}
			</div>
		)
	};
}

export default Qualification;
