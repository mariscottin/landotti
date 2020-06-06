import React, {useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/img/logo-2.png';
import { Link } from "react-scroll";

import './MainNavbar.css';



const MainNavbar = () => {
    const [darkNavbar, setDarkNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 650) {
                setDarkNavbar(true);
            }else{
                setDarkNavbar(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <Navbar variant="dark" bg={darkNavbar && 'dark'} expand="md" fixed="top">
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
                        to="servicesSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link"
                       >
                            Services
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
                        to="methodSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link"
                       >
                            Method
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