import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/img/logo-1.png';
import { Link } from "react-scroll";

import './MainNavbar.css';

const MainNavbar = () => {
    return (
        <Navbar variant="dark" expand="md" fixed="top">
            {/* <Navbar.Brand style={{fontFamily: 'Orbitron, sans-serif', fontSize: '28px'}}>{'<'}Land<span style={{color: '#ffD300'}}>otti</span>{'/>'}</Navbar.Brand> */}
            <Navbar.Brand><img src={Logo} alt="Rhinotech-Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link
                        activeClass="active"
                        to="homeSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link"
                       >
                            Home
                    </Link>
                    <Link
                        activeClass="active"
                        to="teamSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link"
                       >
                            Team
                    </Link>
                    <Link
                        activeClass="active"
                        to="stackSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link"
                       >
                            Stack
                    </Link>
                    <Link
                        activeClass="active"
                        to="portfolioSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link"
                       >
                            Portfolio
                    </Link>
                    <Link
                        activeClass="active"
                        to="contactSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link"
                       >
                            Contact Us
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavbar;