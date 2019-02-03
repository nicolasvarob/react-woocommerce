import React, { Component } from 'react';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import OrderList from '../../components/InpageCart/OrderList/OrderList';
import CheckoutForm from '../../components/Layout/CheckoutForm';

class Checkout extends Component {
    render() {
        return (
            <div id="app">
                <div id="content" className="container">
                    <Navbar />
                    <div className="row">
                        <div className="col">
                            <OrderList />
                            <CheckoutForm />

                            col 1
                    </div>
                        <div className="col">
                            col 2
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Checkout;