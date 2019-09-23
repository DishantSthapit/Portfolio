import React from 'react';
import "./index.css";
import reactCarousel from './../../img/react-carousel.png';
import javascriptCarousel from './../../img/javascript-carousel.png';
import htmlCarousel from './../../img/html-carousel.png';
import cssCarousel from './../../img/css-carousel.png';
import sassCarousel from './../../img/sass-carousel.png';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class TechnicalSkills extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="about-image-wrapper">
				<Carousel className="carousel-test" autoPlay>
					<div className="carousel-outer-wrapper">
						<img className="carousel-image" src={javascriptCarousel} />
						<div className="carousel-text-wrapper">
							<p className="carousel-text">Javascript</p>
						</div>
					</div>
					<div className="carousel-outer-wrapper">
						<img className="carousel-image" src={cssCarousel} />
						<div className="carousel-text-wrapper">
							<p className="carousel-text">CSS</p>
						</div>
					</div>
					<div className="carousel-outer-wrapper">
						<img className="carousel-image" src={reactCarousel} />
						<div className="carousel-text-wrapper">
							<p className="carousel-text">React</p>
						</div>
					</div>
					<div className="carousel-outer-wrapper">
						<img className="carousel-image" src={htmlCarousel} />
						<div className="carousel-text-wrapper">
							<p className="carousel-text">HTML</p>
						</div>
					</div>									
				</Carousel>
			</div>
		);
	}
}

export default TechnicalSkills;