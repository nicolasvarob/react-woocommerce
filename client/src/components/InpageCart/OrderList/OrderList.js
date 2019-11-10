import React, { Component } from 'react';
import OrderListItem from './OrderListItem';
import { connect } from 'react-redux';
import CheckoutButton from './CheckoutButton';
import OrderTotal from './OrderTotal';


class OrderList extends Component {

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        const cartItems = this.props.cartItems;
        const cart = cartItems.map((item) => <OrderListItem key={item.id} id={item.id} name={item.name} qty={item.qty} img={item.img} />)

        let checkoutButton = <CheckoutButton />;

        if (this.props.location) {
            const isCheckout = this.props.location.includes('checkout');
            if (isCheckout) {
                checkoutButton = '';
            }
        }

        return (
            <div id={this.props.id}>
                <OrderTotal />
                <table className="table">
                    <tbody>
                        {cart}
                    </tbody>
                </table>
                <OrderTotal />

                {checkoutButton}

            </div>
        );
    };
}

const mapStateToProps = state => {
    return ({
        cartItems: state.cart.cartItems
    })
}

export default connect(mapStateToProps, null)(OrderList);