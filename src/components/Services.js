import React from 'react';
import Zoom from 'react-reveal/Zoom';
import ResponsiveImg from '../assets/img/responsive.png';
import './Services.css';
const Services = () => {
    return (
        <div className="services__container" id="servicesSection">
            <div className="row">
                <div className="col-lg-6 dark-background services__col-1">
                    <Zoom>
                        <div className="container">
                            <h1>Build your brand and business with an online precense</h1>
                            <p className="services-description">We apply the best practices in the market.</p>
                            <div className="row">
                                <div className="col-lg-6 services__sub-col">
                                    <h5>Become user experience driven</h5>
                                    <p className="justifytext">
                                    A meaningful user experience allows you to define customer journeys on your product that are most conducive to business success.
                                        </p>
                                </div>
                                <div className="col-lg-6 services__sub-col">
                                    <h5>Be sure your message is delivered</h5>
                                    <p className="justifytext">
                                    User Interface Design is one of the reasons that your website will start to see an influx in traffic. It draws people in and keeps them there.
                                        </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 services__sub-col">
                                    <h5>Focus on your customers, while we do the coding</h5>
                                    <p className="justifytext">
                                    We are a full-stack Web solutions provider for both desktop and mobile platforms. That’s why it’s important that your digital 
                                    stage is clean, well-designed and ready to showcase your business’ best features.
                                        </p>
                                </div>
                                <div className="col-lg-6 services__sub-col">
                                    <h5>Be there for who is searching for you</h5>
                                    <p className="justifytext">
                                    Search engines are getting smarter, but they still need our help. Optimizing your site will help deliver better information 
                                    to search engines so that your content can be properly indexed and displayed within search results.
                                        </p>
                                </div>
                            </div>

                        </div>
                    </Zoom>
                </div>
                <div className="col-lg-6 light-background services-col-2">
                    <img src={ResponsiveImg} alt="Responsive Websites" className="reponsive-web-img" />
                </div>
            </div>
        </div >
    )
}

export default Services;