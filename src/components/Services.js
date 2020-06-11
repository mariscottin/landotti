import React from 'react';
import Fade from 'react-reveal/Fade';
import ResponsiveImg from '../assets/img/responsive.png';
import './Services.css';
const Services = () => {
    return (
        <div className="services__container" id="servicesSection">
            <div className="row">
                <div className="col-lg-6 dark-background services__col-1">
                    <Fade>
                        <div className="container">
                            <h1>Build your brand and business with an online presence</h1>
                            <p className="services-description">We apply the best practices in the market.</p>
                            <div className="row">
                                <div className="col-lg-6 services__sub-col">
                                    <div className="services__card">
                                        <h6>Become user experience driven</h6>
                                        <p className="justifytext">
                                            A meaningful user experience allows you to define customer journeys on your product that are most conducive to business success.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 services__sub-col">
                                    <div className="services__card">
                                        <h6>Be sure your message is delivered</h6>
                                        <p className="justifytext">
                                            User Interface Design is one of the reasons your website will start to see an influx in traffic. It draws people in and keeps them there.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-lg-6 services__sub-col">
                                    <div className="services__card">
                                        <h6>Focus on your customers, while we do the coding</h6>
                                        <p className="justifytext">
                                            We are a full-stack web solutions provider for both desktop and mobile platforms. With us, your digital 
                                            stage will be clean, well-designed and ready to showcase your business’ best features.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 services__sub-col">
                                    <div className="services__card">
                                        <h6>Be there for who is searching for you</h6>
                                        <p className="justifytext">
                                            Search engines are getting smarter, but they still need our help. Optimizing your site will help deliver better information 
                                            so that your content can be properly indexed and displayed within search results.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Fade>
                </div>
                <div className="col-lg-6 light-background services-col-2">
                    <img src={ResponsiveImg} alt="Responsive Websites" className="reponsive-web-img" />
                </div>
            </div>
        </div >
    )
}

export default Services;