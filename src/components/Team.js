import React from 'react';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Foto1 from '../assets/img/team-member-1.JPG'
import Foto2 from '../assets/img/team-member-2.JPG'

import './Team.css';

const Team = () => {
    return (
        <div className="team__container" id="teamSection">
                <h1 className="section-title">
                    <Fade>Team Members</Fade>
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Roll>
                            <Card style={{ width: '18rem', margin: 'auto' }}>
                                <Card.Img variant="top" src={Foto1} height="300px" />
                                <Card.Body style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
                                    <Card.Title>Nicolás Mariscotti</Card.Title>
                                    <Card.Text>
                                        CEO and Founder of Landotti Dev.
                                    <br />
                                        Principal Developer.
                                    <br />
                                        Full-stack Developer with over 15 years of experience.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Roll>
                        </div>
                        <div className="col-6">
                        <Roll>
                            <Card style={{ width: '18rem', margin: 'auto' }}>
                                <Card.Img variant="top" src={Foto2} height="300px" />
                                <Card.Body style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
                                    <Card.Title>Ezequiel Lando</Card.Title>
                                    <Card.Text >
                                        Junior Employee at Landotti Dev.
                                    <br />
                                        Assistant.
                                    <br />
                                        Barely knows how to read html, but he is a good guy.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Roll>
                        </div>
                    </div>
                </div>
        </div >
    )
}

export default Team;