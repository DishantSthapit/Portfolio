import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import About from '../components/About/About';
import Softskill from '../components/Softskill/Softskill';


function NavAbout() {
  return (
    <div className="nav-about-wrapper">
        <NavBar />
        <About />
        <Softskill/>
      </div>
  );
}

export default NavAbout;
