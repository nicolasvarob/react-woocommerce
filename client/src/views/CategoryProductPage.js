import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import InpageCart from '../components/InpageCart/InpageCart';
import Navbar from '../components/Navigation/Navbar/Navbar';

const CategoryProductPage = (props) => {
    return (
        <div id="app">
            <div id="content" className="container">
                <Navbar />
                <ProductGrid category={props.params} />
                <InpageCart />
            </div>
        </div>
    );
};

export default CategoryProductPage;