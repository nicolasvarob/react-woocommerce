import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import InpageCart from '../components/InpageCart/InpageCart';
import Navbar from '../components/Navigation/Navbar/Navbar'
import Footer from '../components/Navigation/Footer/Footer'

import './styles.css';

const Home = () => {
    return (
        <div id="app">
            <div id="content" className="container">
                <Navbar />
                <div style={{ "width": "100%", "height": "200px", "backgroundSize": "cover", "backgroundPosition": "0 75%", "backgroundImage": "url(" + require('../assets/short-hero.jpg') + ")" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <h2>
                                    Envío a solo $1.000
                                </h2>
                                <p>En compras desde $15.000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductGrid featured={true} isHome={true} />
                <InpageCart />
            </div>
            <Footer />
        </div>
    );
};

export default Home;