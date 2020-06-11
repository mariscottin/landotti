import React from 'react';
import Zoom from 'react-reveal/Zoom';
import CodeImg from '../assets/img/code.png';
import StackImg from '../assets/img/stack.gif';
import './Stack.css';

const Stack = () => {
    return (
        <div className="stack__container section" id="stackSection">
            <div className="container">
                <Zoom>
                    <div className="row align-items-center">
                        <div className="col-lg-6 stack-col-1">
                            <img src={CodeImg} alt="Here to Code" className="code-img"/>
                        </div>
                        <div className="col-lg-6 stack-col-2">
                            <h1>Here to code {`</>`}</h1>
                            <img src={StackImg} alt="stack img" className="stackicon" />
                            <p>
                                Full stack development team focused on results, teamwork and reliability. We use the lastest technology in software development for the best user experience. 
                            </p>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Stack;