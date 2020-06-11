import React from 'react';
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Button from './Button';
import './Intro.css';

const Intro = () => {
    return (
        <div className="intro-section__container" id="introSection">
            <div className="container">
                <Zoom>
                    <div className="row intro-row align-items-center">
                        <div className="col-lg-6">
                            <h1>Bring your projects, we'll send them to the online world</h1>
                        </div>
                        <div className="col-lg-6">
                            <p>
                                We design and develop websites to bring those ideas and businesses to the online world.
                                Create a fully responsive, user friendly, modern, and powerful website with us!
                                <br />
                                <br />
                                    <Link
                                        to="contactSection"
                                        spy={true}
                                        smooth={true}
                                        duration={700}
                                        >
                                        <Button className="transparent-btn">Get Started!</Button>
                                    </Link>
                                
                            </p>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Intro;