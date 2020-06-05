import React, { useState } from 'react';
import ProjectManagement from '../assets/img/project-management.gif';
import Approach from '../assets/img/project-approach.gif';
import Initiation from '../assets/img/project-initiation.gif';
import Planning from '../assets/img/project-planning.gif';
import Execution from '../assets/img/project-execution.gif';
import Monitoring from '../assets/img/project-monitoring.gif';
import Closure from '../assets/img/project-closure.gif';
import Carousel from 'react-bootstrap/Carousel'
import './Method.css';

const Method = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="method__container section" id="methodSection">
            <h1 className="section-title">Method</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="project-management__img-container">
                            <img src={ProjectManagement} alt="Project Management Method" />
                        </div>
                    </div>
                    <div className="col-lg-6 carousel__container">
                        <Carousel activeIndex={index} onSelect={handleSelect} fade={true} indicators={false}>
                            <Carousel.Item>
                                <div className="carousel-item__container">
                                    <h3>Approach <span><img src={Approach} alt="Project Approach" /></span></h3>
                                    <p>
                                        To run a project successfully, you have to consider all aspects of the Project;
                                        From scope and budget to the tasks and conversations that take place after the project is launched
                                        and executed.
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-item__container">
                                    <h3>Initiation <span><img src={Initiation} alt="Project Initiation" /></span></h3>
                                    <p>
                                        The objective is to identify the why behind the project and the project
                                        goals. The best way to understand the challenges and goals is through a project brief that
                                        outlines the purpose and needs of the Project
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-item__container">
                                    <h3>Planning <span><img src={Planning} alt="Project Planning" /></span></h3>
                                    <p>
                                        The plan we create here will lead our team through the execution,
                                        performance, and closure phases of the project management process. As part of our project
                                        plan, we will consider the project scope, project estimation, general workflow and process,
                                        key project milestones, etc
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-item__container">
                                    <h3>Execution <span><img src={Execution} alt="Project Execution" /></span></h3>
                                    <p>
                                        In this project phase, the team is off and running! The execution stage is
                                        typically the longest in the project management process because it’s when the actual work is
                                        done. You’ll find teams collaborating, reviewing work and revising.
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-item__container">
                                    <h3>Monitoring &amp; Control <span><img src={Monitoring} alt="Project Monitoring &amp; Control" /></span></h3>
                                    <p>
                                        This stage is all about making sure the project runs smoothly
                                        and ensuring things go according to plan. As part of the project monitoring phase, we periodically
                                        run testing and analysis processes to ensure the project's quality.
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-item__container">
                                    <h3>Closure <span><img src={Closure} alt="Project Closure" /></span></h3>
                                    <p>
                                        Many organizations move from one project to the next and don’t take time
                                        to properly close down a project. It’s a smart move to take a few hours to properly close,
                                        reflect, and even celebrate a project.
                                    </p>
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Method;