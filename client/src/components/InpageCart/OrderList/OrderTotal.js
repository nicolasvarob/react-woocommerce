import React, { Component } from 'react';
import { connect } from 'react-redux';
import number_format from '../../../functions/tochileanpesos';

class OrderTotal extends Component {
  
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div className="row">
                <div className="col">Total</div>
                <div className="col">$ {number_format(this.props.total)}</div>
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
