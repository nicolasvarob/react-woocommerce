import React from 'react';
import './Footer.css';

const componentName = () => {
    return (
        <footer>
            <div className="container footer-container">
                <div className="row justify-content-md-center">
                    <div className="col-md-10 col-sm-12">
                        <div className="footer">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <img alt="la picaflor" className="footer-logo" src={require('../../../assets/logo.png')} />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <ul className="footer-list">
                                        <li><h4>Nuestros Productos</h4></li>
                                        <li>URL 1</li>
                                        <li>URL 2</li>
                                        <li>URL 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container sub-footer-container">
                <div className="row justify-content-md-center">
                    <div className="col-md-10 col-sm-12">
                        <p>La Picaflor &#174;{new Date().getFullYear()}, todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default componentName;