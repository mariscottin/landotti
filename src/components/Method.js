import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-bootstrap/Carousel'
import IdeasImg from '../assets/img/ideas.png'
import './Method.css';

const Method = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="method__container" id="methodSection">
            
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="method-title"><Fade>It all starts with a spark and is followed by a good method</Fade></h1>
                        <Fade>
                            <Carousel activeIndex={index} onSelect={handleSelect} fade={true} indicators={true}>
                                <Carousel.Item>
                                    <div className="carousel-item__container">
                                        <h3>1. Approach</h3>
                                        <p>
                                            To run a project successfully, you have to consider all aspects of the Project;
                                            From scope and budget to the tasks and conversations that take place after it's launched
                                            and executed.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="carousel-item__container">
                                        <h3>2. Initiation</h3>
                                        <p>
                                            The objective is to identify the why behind the project and its
                                            goals. The best way to understand the challenges and goals is through a project brief that
                                            outlines the purpose and its needs.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="carousel-item__container">
                                        <h3>3. Planning</h3>
                                        <p>
                                            The plan we create here will lead our team through the execution,
                                            performance, and closure phases of the project management process. As part of our project
                                            plan, we will consider the project scope, estimation, general workflow and process,
                                            key milestones, etc
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="carousel-item__container">
                                        <h3>4. Execution</h3>
                                        <p>
                                            In this project phase, the team is off and running. The execution stage is
                                            typically the longest in the project management process because it’s when the actual work is
                                            done. You’ll find teams collaborating, reviewing work and revising.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="carousel-item__container">
                                        <h3>5. Monitoring &amp; Control</h3>
                                        <p>
                                            This stage is all about making sure the project runs smoothly
                                            and ensuring things go according to plan. As part of the monitoring phase, we periodically
                                            run testing and analysis processes to ensure the project's quality.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="carousel-item__container">
                                        <h3>6. Closure</h3>
                                        <p>
                                            Many organizations move from one project to the next and don’t take time
                                            to properly it close down. It’s a smart move to take a few hours to properly close,
                                            reflect, and even celebrate it.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </Fade>
                    </div>
                    <div className="col-lg-6 method-col-2">
                        <img src={IdeasImg} alt="Ideas" className="idea-img" />
                    </div>
                </div>
            

        </div>
    )
}

export default Method;