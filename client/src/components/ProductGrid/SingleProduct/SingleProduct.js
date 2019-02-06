import React from 'react';
import { connect } from 'react-redux';
import Button from './AddToCartButton/AddToCartButton';
import { addCartItem, decrementQty } from '../../../store/cart'

import './SingleProduct.css'


const SingleProduct = ({ product, qty, addProduct, decrementQty }) => {
    //Producto en grilla
    const { name, price, img } = product
    const parsedPrice = parseInt(price);

    return (
        <div className="card product">
            <div className="card-body">
                <div className="content-wrapper">
                    <div className="img-wrapper">
                        <img className="card-img-top" src={img} alt="Card cap" />
                    </div>
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">Kilo</p>
                    <p className="price"><b>${parsedPrice}</b></p>
                </div>
                {qty ? 
                    <div className="incrementWrapper">
                        <Button className="qtyBtn" onClick={decrementQty}>-</Button>
                        <span>{qty} </span>
                        <Button className="qtyBtn" onClick={addProduct}>+</Button> 
                    </div>: 
                
                <Button className="btn-add-to-cart" onClick={addProduct}> Agregar </Button> }
            </div>
        </div>
    );
};

const mapStateToProps = (state, { product }) => {
    const { cart } = state;
    const cartItems = cart.cartItems;
    const index = cartItems.findIndex(item => item.id === product.id);

    return {
        qty: index < 0 ? 0 : cartItems[index].qty
    }

}

const mapDispatchToProps = (dispatch, props) => ({
    addProduct: () => dispatch(addCartItem(props.product)),
    decrementQty: () => dispatch(decrementQty(props.product.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);