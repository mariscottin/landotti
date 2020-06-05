import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import UxUi from '../assets/img/ux-ui.png'
import WebDesign from '../assets/img/web-design.png'
import WebDevelopment from '../assets/img/web-development.png'
import Seo from '../assets/img/seo.png'

import './Services.css';
const Services = () => {
    return (
        <div className="services__container section" id="servicesSection">
            <h1 className="section-title"><Fade>Services</Fade></h1>
            <div className="services-cards__container">
                <div className="row">
                    <div className="col-lg-3">
                        <Zoom>
                            <Card>
                                <div className="card-front">
                                    <div className="card-front__content middle">
                                        <Card.Img variant="top" src={UxUi} />
                                        <Card.Body>
                                            <Card.Title>UX/UI</Card.Title>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div className="card-back__content middle">
                                        <h2>UX/UI</h2>
                                            <p>We develop all our projects focusing on Mobile First methods, assuring responsiveness for every screen width.</p>
                                            <p>Our expretise in UX/UI allows our users to obtain the best experience when using our websites.</p>
                                    </div>
                                </div>
                            </Card>
                        </Zoom>
                    </div>
                    <div className="col-lg-3">
                        <Zoom>
                            <Card>
                                <div className="card-front">
                                    <div className="card-front__content middle">
                                        <Card.Img variant="top" src={WebDesign} />
                                        <Card.Body>
                                            <Card.Title>Design</Card.Title>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div className="card-back__content middle">
                                        <h2>Web Design</h2>
                                            <p>We are experts in Web Design. We center our work in responsiveness and usability, creating beautiful and impactful designs</p>
                                            <p>We make your website accessible by making it compatible and attuned to multiple devices and browsers.</p>
                                    </div>
                                </div>
                            </Card>
                        </Zoom>
                    </div>
                    <div className="col-lg-3">
                        <Zoom>
                            <Card>
                                <div className="card-front">
                                    <div className="card-front__content middle">
                                        <Card.Img variant="top" src={WebDevelopment} />
                                        <Card.Body>
                                            <Card.Title>Development</Card.Title>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div className="card-back__content middle">
                                        <h2>Web Development</h2>
                                            <p>We use the latest technology in Web Development to create the most modern websites out there.</p>
                                            <p>Javascript, HTML5, CSS3, React js, Wordpress, Node js, Mongo db, SQL, and more!</p>
                                    </div>
                                </div>
                            </Card>
                        </Zoom>
                    </div>
                    <div className="col-lg-3">
                        <Zoom>
                            <Card>
                                <div className="card-front">
                                    <div className="card-front__content middle">
                                        <Card.Img variant="top" src={Seo} />
                                        <Card.Body>
                                            <Card.Title>SEO</Card.Title>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div className="card-back__content middle">
                                        <h2>SEO</h2>
                                            <p>Once deployed, the website cannot be left out there working alone. There is a lot to be done.</p>
                                            <p>Search Engine Optimization is a key process within any website. Increase your website's traffic from the organic or natural search results on search engines</p>
                                    </div>
                                </div>
                            </Card>
                        </Zoom>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services;