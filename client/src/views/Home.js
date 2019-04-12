import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import InpageCart from '../components/InpageCart/InpageCart';
import Navbar from '../components/Navigation/Navbar/Navbar'
import Footer from '../components/Navigation/Footer/Footer'
import Banner from '../components/Layout/Banners/Banner';

import './styles.css';

const Home = () => {
    return (
        <div id="app">
            <div id="content" className="container">
                <Navbar />
                <Banner/>
                <ProductGrid featured={true} isHome={true} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;