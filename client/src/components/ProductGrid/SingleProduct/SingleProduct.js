import React from 'react';

import AddToCartButton from './AddToCart.js/AddToCart';

import './SingleProduct.css'


const SingleProduct = (props) => {

    const price = parseInt(props.price);

    return (
        <div className="card product">
            <div className="card-body">
                <img className="card-img-top" src={props.img} alt="Card cap" />
                <h5 className="card-title">{props.name}</h5>s
                <p className="card-title"><b>$ { price }</b></p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <AddToCartButton id={props.id} name={props.name} price={props.price} img={props.img} qty={1}/>
            </div>
        </div>
    );
};

export default SingleProduct;