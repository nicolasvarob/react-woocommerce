import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderTotal extends Component {
  
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div className="row">
                <div className="col">Total</div>
                <div className="col">$ {this.props.total}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        total: state.cart.cartItems.reduce((prev, i) => prev + (i.qty * i.price),0)
    });
}

export default connect(mapStateToProps, null)(OrderTotal);
