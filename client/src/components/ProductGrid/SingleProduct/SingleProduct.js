import React from 'react';
import { connect } from 'react-redux';
import Button from './AddToCartButton/AddToCartButton';
import { addCartItem, decrementQty } from '../../../store/cart'
import number_format from '../../../functions/tochileanpesos';

import 'font-awesome/css/font-awesome.min.css';
import './SingleProduct.css'


const SingleProduct = ({ product, qty, addProduct, decrementQty }) => {
    //Grid product
    const { name, price, img, measure, on_sale, sale_price } = product
    const parsedPrice = parseInt(price);
    console.log('is in sale ? ' + on_sale)

    return (
        <div className="card product">
            <div className="card-body">
                <div className="content-wrapper">
                    <div className="img-wrapper">
                        <img className="card-img-top" src={img} alt="Card cap" />
                    </div>
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text wgth">{ measure ? measure : 'Kg' }</p>
                    <p className="price"><b>${number_format(parsedPrice)}</b></p>
                </div>
                {qty ? 
                    <div className="incrementWrapper">
                        <Button className="qtyBtn" onClick={decrementQty}><i className="fa fa-minus"></i></Button>
                        <span>{qty} </span>
                        <Button className="qtyBtn" onClick={addProduct}><i className="fa fa-plus"></i></Button> 
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