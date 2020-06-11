import React from 'react';
import Brand from '../assets/img/logo-3.gif';
import Spain from '../assets/img/spainlogo.png';
import UK from '../assets/img/uklogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {
    return(
        <div className="foot">   
            <div className="footer">
                <div className="footsquare">
                    <div className="footsquare">
                        <div className="footlogo">
                            <img src={Brand} alt="Rhinotech" className="brand"/>
                        </div>
                    </div>
                </div>
                <div className="footsquare">    
                    <h1>Solutions</h1>
                    <ul>
                        <li>E-commerce</li>
                        <li>Customer Engagement</li>
                        <li>Analytics</li>
                        <li>Search optimization</li>
                    </ul>
                </div>
                <div className="footsquare">
                    <h1>Industries</h1>
                    <ul>
                        <li>Services</li>
                        <li>Retail</li>
                        <li>Clients</li>
                        <li>Talent</li>
                    </ul>
                </div>
                <div className="footsquare">
                    <h1>Contact Us</h1>
                    <ul>
                        <li>+54 11 6875 4769</li>
                    </ul>
                    <ul>
                        <li><img src={Spain} alt="Spain" className="spain"/></li>
                        <li><img src={UK} alt="Spain" className="Uk"/></li>
                        <li><i className="fab fa-twitter-square"></i></li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <p>All rights reserved &copy;</p>
            </div>
        </div> 
    )
}



export default Footer;
