import React from 'react';
import "./index.css";
import experienceData from './../../json/experienceData';
import {Row,Col} from 'react-bootstrap';


class Experience extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="container">
				<div className="section-heading">Experience</div>

				<Row>
				{experienceData.map((item) => {
					return (
						<Col key={item.id}>
							<div className="experience-outer-wrapper" key={item.id} >
								<div className="experience-image-wrapper">
									<img className="experience-iw-image" src={item.image} />
								</div>
								<div className="experience-content-wrapper">
									<h2>{item.description.title}</h2>
									<div className="experience-cw-title">{item.role}</div>
									<div className="experience-cw-duration">{item.description.time}</div>
									<button>Find out more</button>
								</div>
							</div>
						</Col>

					)

				})
				}
				</Row>
			</div>

		)
	}
}

export default Experience;
