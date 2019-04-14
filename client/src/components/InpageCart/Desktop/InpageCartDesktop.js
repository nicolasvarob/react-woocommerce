import React, { Component } from 'react';
import { connect } from 'react-redux';

class componentName extends Component {
    //TODO: Deshabilitar botón al no haber items en el carro
    // Este boton colapsa el shopping cart del header, la funcionalidad de colapsar el div no esta hecha por react si no que la entrega bootstrap
    
    render() {
        let disabled = true;
        if(this.props.cartLength > 0 ){
            disabled = false;
        }
        return (
            <button className="btn btn-primary btn-lg " type="button" data-toggle="collapse" data-target="#sidebar-cart" aria-expanded="false" aria-controls="collapseExample">
                Carro de compra ({this.props.cartLength})
            </button>

        );
    }
}

const mapStateToProps = state => {
    return ({
        cartLength: state.cart.cartItems.length
    });
}

export default connect(mapStateToProps, null)(componentName);
