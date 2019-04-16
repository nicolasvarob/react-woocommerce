import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingBasketIcon from '../../UI/SVG/ShoppingBasketIcon'

import './InpageCartButton.css'

class InpageCartButton extends Component {
    //TODO: Deshabilitar botón al no haber items en el carro
    // Este boton colapsa el shopping cart del header, la funcionalidad de colapsar el div no esta hecha por react si no que la entrega bootstrap
    
    render() {
        let disabled = true;
        if(this.props.cartLength > 0 ){
            disabled = false;
        }
        return (
            <button className="btn btn-primary inpage-cart-button" type="button" data-toggle="collapse" data-target="#sidebar-cart" aria-expanded="false" aria-controls="collapseExample" disabled={disabled} >
                <span className="icon">
                <ShoppingBasketIcon/>
                </span> 
                <span className="text">
                Carro de compra ({this.props.cartLength})
                </span>
            </button>

        );
    }
}

const mapStateToProps = state => {
    return ({
        cartLength: state.cart.cartItems.length
    });
}

export default connect(mapStateToProps, null)(InpageCartButton);
