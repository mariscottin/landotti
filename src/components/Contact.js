import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import emailjs from 'emailjs-com';
import ReactLoading from 'react-loading';
import Brand from '../assets/img/rhino-brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'

import Button from './Button';
import './Contact.css';

const Contact = () => {
    const [messageSent, setMessageSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const submitEmailHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(e.target);
        emailjs.sendForm('gmail', 'contact_form', e.target, 'user_ooKOs4drgb4kXEMQOyQCO')
            .then((result) => {
                setMessageSent(true)
            }, (error) => {
                console.log(error.text);
                window.alert('Something went wrong sending the message. Please try again!')
            })
            .then(() => {
                setMessageSent(true);
                setIsLoading(false);
            });
    }


    return (
        <div className="contact__container section" id="contactSection">
            <h1 className="section-title"><Fade>Contact Us</Fade></h1>
            <Zoom>
                <div className="container">

                    {!messageSent &&
                        <form onSubmit={submitEmailHandler}>
                            <input type="hidden" name="email_number" value={Math.random() * 100000 | 0} />
                            <div className="form-group">
                                <label htmlFor="emailAddress">Your Email Address:</label>
                                <input type="email" placeholder="Enter your email address..." className="form-control" id="emailAddress" name="user_email" disabled={isLoading ? true : false} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailInput">Message:</label>
                                <textarea className="form-control" id="emailInput" placeholder="Enter your message, we will be replying soon!" name="message" disabled={isLoading ? true : false} required></textarea>
                            </div>
                            <div className="submit-form">
                                {isLoading &&
                                <div className="contact-loading-spinner__container">
                                    <ReactLoading type="spinningBubbles" color="#ffD300" height={60} width={60} />
                                </div>
                                }
                                {!isLoading &&
                                    <Button type="submit">Submit</Button>
                                }
                            </div>
                        </form>
                    }
                    {(messageSent && !isLoading) &&
                        <div className="success-message-sent">
                            <div className="happy-icon__container">
                                <FontAwesomeIcon icon={faSmileBeam} style={{fontSize: '60px'}} color="#ffD300"/>
                            </div>
                            <h2>Message Sent Successfully!</h2>
                            <h3>Thanks! We will reply as soon as possible!</h3>
                            <h4><span className="brand"><img src={Brand} alt="Rhinotech" /></span> team</h4>
                            <div className="send-another-message__container">
                                <p onClick={()=> setMessageSent(false)}>Send another message</p>
                            </div>
                        </div>
                    }
                </div>
            </Zoom>
        </div>

    )
}

export default Contact;