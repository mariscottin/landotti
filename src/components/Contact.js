import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
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
        <div className="contact__container" id="contactSection">
            <div className="contact__title">
                <h1><Fade>Get Started</Fade></h1>
                <h3><Fade>Tell us your idea and we'll help you get it up and running online</Fade></h3>
            </div>
            <div className="contact-dark-background"></div>
            <Fade>
                <div className="contact-form">
                    {!messageSent &&
                        <form onSubmit={submitEmailHandler}>
                            <input type="hidden" name="email_number" value={Math.random() * 100000 | 0} />
                            <div className="form-group">
                                <input type="email" placeholder="your@email.com" className="form-control" id="emailAddress" name="user_email" disabled={isLoading ? true : false} required/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="emailInput" placeholder="Tell us about your idea and what you need!" name="message" disabled={isLoading ? true : false} required></textarea>
                            </div>
                            <div className="submit-form">
                                {isLoading &&
                                <div className="contact-loading-spinner__container">
                                    <ReactLoading type="spinningBubbles" color="#ffD300" height={60} width={60} />
                                </div>
                                }
                                {!isLoading &&
                                    <Button type="submit" className="custom-button">Submit</Button>
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
            </Fade>
        </div>

    )
}

export default Contact;