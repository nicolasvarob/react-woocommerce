import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Header from '../components/Navigation/Navbar/Header';
import Footer from '../components/Navigation/Footer/Footer';
const CategoryProductPage = (props) => {

    return (
        <div id="app">
            <div id="content" className="container">
                <Header />
                <ProductGrid category={props.match.params.name} />
            </div>
            <Footer/>
        </div>
    );
};

export default CategoryProductPage;