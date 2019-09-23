import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import NavBar from '../components/NavBar/NavBar';
import samplePDF from './../docs/Dishant-Resume.pdf';
import socialIcons from "./../json/socialIcons"

class NavResume extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numPages: null,
			pageNumber: 1,
		};
	}

	onDocumentLoadSuccess = (document) => {
		const { numPages } = document;
		this.setState({
			numPages,
			pageNumber: 1,
		});
	};

	changePage = offset => this.setState(prevState => ({
		pageNumber: prevState.pageNumber + offset,
	}));

	previousPage = () => this.changePage(-1);

	nextPage = () => this.changePage(1);

	render() {
		const { numPages, pageNumber } = this.state;
		pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
		const data = socialIcons.map(item => {
			return <div className="pdf-icon-item" key={item.key}>
				<a href={item.link} target="blank">
					<img className="pdf-icon-item-icon grow" src={item.icon}></img>
				</a>
			</div>

		})
		return (
			<div>
				<NavBar />
				<div className="pdf-view">
					<div className="pdf-top-view">
						Please have a read and feel free to contact
               		 </div>
					<div className="pdf-icon-view">
						{data}
					</div>
					<a target="_blank" href={samplePDF}>Click here to download the Resume</a>
					<React.Fragment>
						<p>
							Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
						</p>
						<div className="button-wrapper">
							<button
								type="button"
								className="button-icon"
								disabled={pageNumber <= 1}
								onClick={this.previousPage}
							> Previous </button>
							<button
								type="button"
								className="button-icon"
								disabled={pageNumber >= numPages}
								onClick={this.nextPage}
							> Next</button>
						</div>
						<Document
							file={samplePDF}
							onLoadSuccess={this.onDocumentLoadSuccess}
						>
							<Page pageNumber={pageNumber} />
						</Document>
					</React.Fragment>
				</div>
			</div>
		);
	}
}

export default NavResume;
