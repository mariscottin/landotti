import React from 'react';
import Zoom from 'react-reveal/Zoom';
import CodeImg from '../assets/img/code.png'
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
                            <p>
                                Fugiat nostrud ipsum ad excepteur quis eu enim elit labore. 
                                Enim elit dolore reprehenderit aute enim pariatur incididunt ex mollit aute est magna proident. 
                                Amet labore excepteur officia consectetur aute reprehenderit mollit laborum. Pariatur pariatur.
                            </p>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Stack;