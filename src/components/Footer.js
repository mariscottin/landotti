import React from 'react';
import Brand from '../assets/img/rhino-brand.png'
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <img src={Brand} alt="Rhinotech" className="brand"/>
            <div style={{fontFamily: 'Orbitron, sans-serif', fontSize: '20px'}}>Web Design and Development</div>
        </div>
    )
}

export default Footer;
