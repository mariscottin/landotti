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
                            <p className="services-description">Magna exercitation ad ex do velit.</p>
                            <div className="row">
                                <div className="col-lg-6 services__sub-col">
                                    <h5>Become user experience driven</h5>
                                    <p>
                                        Pariatur ipsum sint enim consequat commodo irure commodo magna reprehenderit culpa sint pariatur ad.
                                        Laborum commodo est irure est proident. Cillum consequat eiusmod commodo sunt aliqua proident.
                                        </p>
                                </div>
                                <div className="col-lg-6 services__sub-col">
                                    <h5>Be sure your message is delivered</h5>
                                    <p>
                                        Pariatur ipsum sint enim consequat commodo irure commodo magna reprehenderit culpa sint pariatur ad.
                                        Laborum commodo est irure est proident. Cillum consequat eiusmod commodo sunt aliqua proident.
                                        </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 services__sub-col">
                                    <h5>Focus on your customers, while we do the coding</h5>
                                    <p>
                                        Pariatur ipsum sint enim consequat commodo irure commodo magna reprehenderit culpa sint pariatur ad.
                                        Laborum commodo est irure est proident. Cillum consequat eiusmod commodo sunt aliqua proident.
                                        </p>
                                </div>
                                <div className="col-lg-6 services__sub-col">
                                    <h5>Be there for who is searching for you</h5>
                                    <p>
                                        Pariatur ipsum sint enim consequat commodo irure commodo magna reprehenderit culpa sint pariatur ad.
                                        Laborum commodo est irure est proident. Cillum consequat eiusmod commodo sunt aliqua proident.
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