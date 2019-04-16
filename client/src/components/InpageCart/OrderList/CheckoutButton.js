import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class CheckoutButton extends Component {

    render(){
        let disabled = true;
        if(this.props.cartLength > 0 ){
            disabled = false;
        }
        return (
            <NavLink to="/checkout"><button type="button" className="btn btn-info" disabled={disabled}>CHECKOUT</button></NavLink>
        );
    }
};

const mapStateToProps = state => {
    return ({
        cartLength: state.cart.cartItems.length
    });
}

export default connect(mapStateToProps, null)(CheckoutButton);