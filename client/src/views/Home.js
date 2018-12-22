import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import InpageCart from '../components/InpageCart/InpageCart';

const Home = () => {
    return (
        <div>
            <ProductGrid featured={true} />
            <InpageCart />
        </div>
    );
};

export default Home;