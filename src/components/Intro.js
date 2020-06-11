import React from 'react';
import Zoom from 'react-reveal/Zoom';

import './Intro.css';

const Intro = () => {
    return(
        <div className="intro-section__container" id="introSection">
            <div className="container">
                <Zoom>
                    <div className="row intro-row align-items-center">
                        <div className="col-lg-6">
                            <h1>Bring your projects, we'll send them to the online world</h1>
                        </div>
                        <div className="col-lg-6">
                            <p>
                                Veniam ullamco deserunt dolor anim cupidatat labore et ea adipisicing nostrud elit cupidatat. 
                                Tempor laboris sunt exercitation ad ipsum velit ipsum quis. Labore dolor dolor ut nulla fugiat mollit.
                            </p>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Intro;