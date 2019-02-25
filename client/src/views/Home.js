import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import InpageCart from '../components/InpageCart/InpageCart';
import Navbar from '../components/Navigation/Navbar/Navbar'
import Footer from '../components/Navigation/Footer/Footer'
import Hero from '../components/Layout/Hero/Hero';

import './styles.css';

const Home = () => {
    return (
        <div id="app">
            <div id="content" className="container">
                <Navbar />
                <ProductGrid featured={true} isHome={true} />
                <InpageCart />
                <Footer />
            </div>
        </div>
    );
};

export default Home;