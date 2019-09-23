import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../src/view/home'
import NavAbout from '../src/view/navabout';
import NavSkills from '../src/view/navskills';
import NavExperience from './view/navexperience';
import NavResume from './view/navresume';
import NavQualification from './view/navqualification';

function App() {
  return (
    <main>
      <Router  basename="/portfolio">
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={NavAbout} />
            <Route path="/skills" component={NavSkills} />
            <Route path="/experience" component={NavExperience} />
            <Route path="/resume" component={NavResume} />
            <Route path="/qualification" component={NavQualification} />
            
        </div>
      </Router>
       
    </main>
  );
}

export default App;
