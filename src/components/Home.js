import React from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Zoom';
import './Home.css';

const Home = () => {
  return (
    <div className='home__container section' id="homeSection">
      <div className='home-title__container'>
        <h1><Zoom>Bring your Projects and Ideas to the Internet</Zoom></h1>
        <h4><Zoom>- Web Design and Development -</Zoom></h4>
      </div>

      <Link
        to="teamSection"
        spy={true}
        smooth={true}
        duration={700} 
        className='home-get-started__container' 
        title="Get Started!">
        <FontAwesomeIcon icon={faChevronDown} color="ffffff" className="home-get-started__icon" />
      </Link>
    </div>
  )
}

export default Home;