import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderTotal extends Component {
    componentDidUpdate(){
        console.log(this.props)
    }
    render() {
        return (
            <div className="row">
                <div className="col">Total</div>
                <div className="col">$2.500</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        cartItems: state.cart.cartItems
    })
}

export default connect(mapStateToProps, null)(OrderTotal);
