import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/img/logo-1.png';

import Navlinks from './Navlinks';
import BackDrop from './Backdrop';
import SideDrawer from './SideDrawer';

import './MainNavigation.css';

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [darkNavbar, setDarkNavbar] = useState(false);
    
    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }

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
        <React.Fragment>
            {drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}

            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <Navlinks closeDrawerHandler={closeDrawerHandler}/>
                </nav>
            </SideDrawer>

            <div className={`main-header ${darkNavbar && 'dark-background'}`}>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <div className="main-navigation__title">
                    <Link
                        activeClass="active"
                        to="homeSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link">
                        <img src={Logo} alt="Logo Rhinotech" />
                    </Link>
                </div>
                <nav className="main-navigation__header-nav">
                    <Navlinks closeDrawerHandler={closeDrawerHandler}/>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default MainNavigation;
