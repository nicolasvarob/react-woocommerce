import React from 'react';

import AddToCartButton from './AddToCartButton/AddToCartButton';

import './SingleProduct.css'


const SingleProduct = (props) => {
//Producto en grilla


    const price = parseInt(props.price);

    return (
        <div className="card product">
            <div className="card-body">
                <div className="content-wrapper">
                    <div className="img-wrapper">
                        <img className="card-img-top" src={props.img} alt="Card cap" />
                    </div>
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-text">Kilo</p>
                    <p className="price"><b>${price}</b></p>
                </div>
                <AddToCartButton id={props.id} name={props.name} price={props.price} img={props.img} qty={1} />
            </div>
        </div>
    );
};

export default SingleProduct;