import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Header from '../components/Navigation/Navbar/Header'
import Footer from '../components/Navigation/Footer/Footer'
import Banner from '../components/Layout/Banners/Banner';

import './styles.css';

const Home = () => {
    return (
        <div id="app">
            <div id="content" className="container">
                <Header />
                <Banner/>
                <ProductGrid featured={true} isHome={true} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;