import React from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';
import './Home.css';

const Home = () => {
  return (
    <div className='home__container section' id="homeSection">
      <div className='home-title__container'>
        <h1><Fade>All ideas deserve a chance.</Fade></h1>
        <Link
          to="introSection"
          spy={true}
          smooth={true}
          duration={700}
          className='home-get-started__container'
          title="Get Started!">
          <FontAwesomeIcon icon={faChevronDown} color="ffffff" className="home-get-started__icon" />
        </Link>
      </div>

    </div>
  )
}

export default Home;