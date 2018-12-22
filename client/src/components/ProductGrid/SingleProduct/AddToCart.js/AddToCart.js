import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addCartItem } from '../../../../actions/cartAction'

import { connect } from 'react-redux';


class AddToCartButton extends Component {

    state = {
    }

    AddToCart = () =>{        
        this.props.addCartItem(this.props.id,this.props.name,this.props.price,this.props.qty,this.props.img)
    }

    render() {
        return (
            <a href="#access" onClick={this.AddToCart} className="btn btn-primary">Buy</a>
        );
    }
}

AddToCartButton.propTypes = {
    addToCart: PropTypes.object
}

export default connect(null,{ addCartItem })(AddToCartButton);