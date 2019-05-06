import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Navbar from '../components/Navigation/Navbar/Navbar';
import Footer from '../components/Navigation/Footer/Footer';
const CategoryProductPage = (props) => {

    return (
        <div id="app">
            <div id="content" className="container">
                <Navbar />
                <ProductGrid category={props.match.params.name} />
            </div>
            <Footer/>
        </div>
    );
};

export default CategoryProductPage;