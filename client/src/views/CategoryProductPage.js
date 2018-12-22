import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import InpageCart from '../components/InpageCart/InpageCart';

const CategoryProductPage = (props) => {
    return (
        <div>
            <ProductGrid category={props.params} />
            <InpageCart />
        </div>
    );
};

export default CategoryProductPage;