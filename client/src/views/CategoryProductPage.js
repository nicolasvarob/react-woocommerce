import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import InpageCart from '../components/InpageCart/InpageCart';
import Navbar from '../components/Navigation/Navbar/Navbar';

const CategoryProductPage = (props) => {
    return (
        <div>
            <Navbar/>
            <ProductGrid category={props.params} />
            <InpageCart />
        </div>
    );
};

export default CategoryProductPage;