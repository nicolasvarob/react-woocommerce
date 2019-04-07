import React from 'react';

const Banner = () => {
    return (
        <div style={{ "width": "100%", "height": "200px", "backgroundSize": "cover", "backgroundPosition": "0 75%", "backgroundImage": "url(" + require('../assets/short-hero.jpg') + ")" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h2>
                            Envíos a solo $1.000
                        </h2>
                        <p>En compras superiores a $15.000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;