import React from 'react';
import "./index.css";
import hardwork from './../../img/hardwork.png'; 
import detail from './../../img/detail.png'; 
import timemanagement from './../../img/timemanagement.png'; 
import communication from './../../img/communication.png'; 
import { Accordion, Card, Button,  } from 'react-bootstrap';

class Softskill extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
	}

  render() {
    return(
        <div className="soft-skill-wrapper">
            <div className="container">
                <div className="section-heading">Soft Skills</div>
                <div className="card-wrapper">
                    <Card className="card-design">
                        <Card.Img variant="top" src={hardwork} />
                        <Card.Body>
                            <Accordion defaultActiveKey="1" className="grow"> 
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                        Hard Work
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Working intelligently and vigorously at a given task to complete it with maximum efficiency</Card.Body>
                                    </Accordion.Collapse>
                                
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <Card className="card-design">
                        <Card.Img variant="top" src={detail} />
                        <Card.Body>
                            <Accordion defaultActiveKey="1" className="grow"> 
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                        Attention to Detail
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body> Attention to Detail basically means the ability to concentrate on a task</Card.Body>
                                    </Accordion.Collapse>
                                
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <Card className="card-design">
                        <Card.Img variant="top" src={communication} />
                        <Card.Body>
                            <Accordion defaultActiveKey="1" className="grow"> 
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                        Communication
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Communication skills are abilities you use when giving and receiving different kinds of information</Card.Body>
                                    </Accordion.Collapse>
                                
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <Card className="card-design">
                        <Card.Img variant="top" src={timemanagement} />
                        <Card.Body>
                            <Accordion defaultActiveKey="1" className="grow"> 
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                        Time Management
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Time management skills are important because they help you structure your work in a way that allows for you to accomplish goals</Card.Body>
                                    </Accordion.Collapse>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </div>
            </div>
         </div>
    );
  }
}

export default Softskill;