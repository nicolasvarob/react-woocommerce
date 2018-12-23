import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import InpageCart from '../components/InpageCart/InpageCart';
import Navbar from '../components/Navigation/Navbar/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <ProductGrid featured={true} />
            <InpageCart />
        </div>
    );
};

export default Home;