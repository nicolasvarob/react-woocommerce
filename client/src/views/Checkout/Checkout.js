import React, { Component } from 'react';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import OrderList from '../../components/InpageCart/OrderList/OrderList';
import CheckoutForm from '../../components/Layout/Forms/CheckoutForm';
import ShippingDateSelect from '../../components/Layout/Forms/ShippingDateSelect/ShippingDateSelect';

class Checkout extends Component {
    render() {
        return (
            <div id="app">
                <div id="content" className="container">
                    <Navbar />
                    <div className="row">
                        <div className="col-sm">
                            <OrderList />
                            <CheckoutForm />
                        </div>
                        <div className="col-sm">
                            <ShippingDateSelect />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Checkout;