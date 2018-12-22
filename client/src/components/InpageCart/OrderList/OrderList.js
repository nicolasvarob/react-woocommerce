import React, { Component } from 'react';
import OrderListItem from './OrderListItem';
import { connect } from 'react-redux';

class OrderList extends Component {

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        const cartItems = this.props.cartItems;
        const cart = cartItems.map((item) => <OrderListItem key={item.id} name={item.name} qty={item.qty} img={item.img}/>)



        return (
            <table className="table">
                <tbody>
                    <tr>
                        <th>Total</th>
                    </tr>
                    { cart }
                </tbody>
            </table>
        );
    };
}

const mapStateToProps = state => {
    return ({
        cartItems: state.cart.cartItems
    })
}

export default connect(mapStateToProps, null)(OrderList);