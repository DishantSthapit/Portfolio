import React from 'react';
import "./index.css";
import { NavDropdown, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
	}

  render() {
    return(
		<Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
       <img className="portfolio"
        src="https://image.flaticon.com/icons/png/512/1891/1891369.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> E-Portfolio
        </Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link href=""><Link to="/" className="nav">Home</Link></Nav.Link>
				<Nav.Link href=""><Link to="/about" className="nav">About</Link></Nav.Link>
				<Nav.Link href=""><Link to="/skills" className="nav">Skills</Link></Nav.Link>
				<Nav.Link href=""><Link to="/qualification" className="nav">Qualification</Link></Nav.Link>
				<Nav.Link href=""><Link to="/experience" className="nav">Experience</Link></Nav.Link>
        <Nav.Link href=""><Link to="/resume" className="nav">Resume</Link></Nav.Link>
			</Nav>
		</Navbar.Collapse>
		</Navbar>
    );
  }
}

export default NavBar;