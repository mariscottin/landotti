import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import Button from './Button';
import './Contact.css';

const Contact = () => {
    return(
        <div className="contact__container section" id="contactSection">
            <h1 className="section-title"><Fade>Contact Us</Fade></h1>
            <Zoom>
                <div className="container">
                    <div className="form-group">
                        <label htmlFor="emailAddress">Your Email Address:</label>
                        <input type="email" placeholder="Enter your email address..." className="form-control" id="emailAddress"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Message:</label>
                        <textarea className="form-control" id="emailInput" placeholder="Enter your message, we will be replying soon!"></textarea>
                    </div>
                    <div className="submit-form">
                        <Button>Submit</Button>
                    </div>
                </div>
            </Zoom>
        </div>
        
    )
}

export default Contact;