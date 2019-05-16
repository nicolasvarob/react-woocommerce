import React, { Component } from "react";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import OrderList from "../../components/InpageCart/OrderList/OrderList";
import CheckoutForm from "../../components/Layout/Forms/CheckoutForm";
import ShippingDateSelect from '../../components/Layout/Forms/ShippingDateSelect/ShippingDateSelect';

import { NavLink } from "react-router-dom";

import "./Checkout.css";

class Checkout extends Component {
  state = {
    date: new Date()
  };

  render() {
    const location = this.props.location.pathname;
    return (
      <div id="app">
        <div id="content" className="container">
          <Navbar />
          <div className="wrapper">
            <div className="row text-center">
              <h1>Checkout</h1>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="box-wrapper">
                  <OrderList id="checkout-orderlist" location={location} />
                </div>
                <CheckoutForm />
              </div>
              <div className="col-sm">
                <h2>Selecciona el día de entrega</h2>
                <ShippingDateSelect/>
                <p className="text-box">
                  Deberás hacer una transferencia electrónica ahora. Tu pedido
                  quedará reservado por 40 minutos. La información para la
                  transferencia la recibirás en tu correo electónico junto con
                  el resto de la información del pedido.
                </p>
                <NavLink to="/checkout/thank-you">
                  <button type="button" className="btn btn-success ">
                    COMPRAR
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="row">
              <h2>Condiciones del servicio</h2>
            </div>
            <div className="row">
              <ul className="legal">
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
