import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import HTML from '../assets/img/html-logo.png';
import CSS from '../assets/img/css-logo.png';
import REACT from '../assets/img/react-logo.png';
import JS from '../assets/img/js-logo.png';
import JQUERY from '../assets/img/jquery-logo.png';
import NODE from '../assets/img/node-logo.png';
import SQL from '../assets/img/sql-logo.png';
import MONGO from '../assets/img/mongo-logo.png';

import './Stack.css';

const Stack = () => {
    return (
        <div className="stack__container section" id="stackSection">
            <h1 className="section-title">
                <Fade>Stack</Fade>
            </h1>
            <div>
                <div className="container">
                    <div className="row">
                        <Zoom>
                            <div className="col-lg-3">
                                <img src={HTML} alt="HTML5-Logo" className="stack-logo" title="HTML5" />
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="col-lg-3">
                                <img src={CSS} alt="CSS3-Logo" className="stack-logo" title="CSS3" />
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="col-lg-3">
                                <img src={JS} alt="Javascript-Logo" className="stack-logo" title="Javascript" />
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="col-lg-3">
                                <img src={JQUERY} alt="JQuery-Logo" className="stack-logo" title="JQuery" />
                            </div>
                        </Zoom>
                    </div>
                    <div className="row">
                        <Zoom>
                            <div className="col-lg-3">
                                <img src={REACT} alt="React-Logo" className="stack-logo" title="React js" />
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="col-lg-3">
                                <img src={NODE} alt="Nodejs-Logo" className="stack-logo" title="Node js" />
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="col-lg-3">
                                <img src={SQL} alt="SQL-Logo" className="stack-logo" title="SQL" />
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="col-lg-3">
                                <img src={MONGO} alt="MongoDb-Logo" className="stack-logo" title="MongoDb" />
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack;