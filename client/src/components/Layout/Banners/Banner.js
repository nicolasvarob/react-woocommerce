import React from 'react';

import './Banner.css';

const Banner = () => {
    return (
        <div style={{ position:"relative","width": "100%", "height": "200px", "backgroundSize": "cover", "backgroundPosition": "0 75%", "backgroundImage": "url(" + require('../../../assets/short-hero.jpg') + ")" }}>
            <div className="container">
                <div className="banner-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div id="banner">
                                <h2>
                                    Envío gratuito
                        </h2>
                                <p>En compras superiores a $15.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;