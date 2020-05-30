import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from "react-scroll";

import './MainNavbar.css';

const MainNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
            <Navbar.Brand style={{fontFamily: 'Orbitron, sans-serif'}}>Landotti <span style={{color: '#ffD300'}}>Dev</span>.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link
                        activeClass="active"
                        to="homeSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link">
                            Home
                    </Link>
                    <Link
                        activeClass="active"
                        to="teamSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link">
                            Team
                    </Link>
                    <Nav.Link href="#link">Stack</Nav.Link>
                    <Nav.Link href="#link">Portfolio</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavbar;