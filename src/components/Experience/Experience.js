import React from 'react';
import "./index.css";
import experienceData from './../../json/experienceData';
import {Row,Col,Modal} from 'react-bootstrap';



class Experience extends React.Component {
	constructor() {
		super();
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.state = {
			showModal: false
		};
	}

	getInitialState() {
		return { showModal: false };
	}
	
	close() {
	this.setState({ showModal: false });
	}

	open() {
	this.setState({ showModal: true });
	}

	render() {
		return (
			<div className="container">
				<div className="section-heading">Experience</div>
					<Modal 
						show={this.state.showModal} 
						onHide={this.close} 
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered
						dialogClassName="modal-90w"
					>
						<Modal.Header>
							<Modal.Title>Detail Information</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{experienceData.map((item) => {
								return (
									<div>
										<ul>{item.summary.title}
											<li>{item.description.skills}</li>
											<li>{item.summary.summary1}</li>
											<li>{item.summary.summary2}</li>
											<li>{item.summary.summary3}</li>
										</ul>
									</div>
			)
							})
							}
							
						</Modal.Body>
						<Modal.Footer>
							<button className="modal-button modal-select-button" onClick={this.close}>Cancel</button>

						</Modal.Footer>
					</Modal>

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
									
									<button onClick={this.open}>Find out more</button>
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
