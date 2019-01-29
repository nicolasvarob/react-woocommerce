import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addCartItem } from '../../../../actions/cartAction'

import './AddToCartButton.css';

class AddToCartButton extends Component {
//Boton agregar al carro de compras junto a cada item de la grilla de productos
    state = {
    }

    AddToCart = () =>{        
        this.props.addCartItem(this.props.id,this.props.name,this.props.price,this.props.qty,this.props.img)
    }

    render() {
        return (
            <a href="#access" onClick={this.AddToCart} className="btn btn-primary bg-green">Agregar</a>
        );
    }
}

AddToCartButton.propTypes = {
    addToCart: PropTypes.object
}

export default connect(null,{ addCartItem })(AddToCartButton);