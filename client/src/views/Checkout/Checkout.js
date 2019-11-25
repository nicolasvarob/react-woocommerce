import React, { Component } from "react";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import OrderList from "../../components/InpageCart/OrderList/OrderList";
import CheckoutForm from "../../components/Layout/Forms/CheckoutForm";
import ShippingDateSelect from "../../components/Layout/Forms/ShippingDateSelect/ShippingDateSelect";
import CheckoutButton from "../../components/Checkout/CheckoutButton/CheckoutButton";

import "./Checkout.css";

class Checkout extends Component {
  state = {
    shippingDate: null,
    formData: {}
  };

  _returnPickupDateFromChild = date => {
    if (this.state.shippingDate !== date) this.setState({ shippingDate: date });
  };

  _returnFormDataFromChild = data => {
    this.setState({ formData: data });
  };

  render() {
    const location = this.props.location.pathname;

    return (
      <div id="app">
        <div id="content" className="container">
          <Navbar hidden={true} />
          <div className="wrapper">
            <div className="row text-center">
              <h1>Checkout</h1>
            </div>
            <div className="row">
              <div className="col-sm">
                <h2>Carro de compras</h2>
                <div className="box-wrapper">
                  <OrderList id="checkout-orderlist" location={location} />
                </div>
              </div>
              <div className="col-sm">
                <h2>Datos de entrega</h2>
                <CheckoutForm
                  formDataCallback={this._returnFormDataFromChild}
                />
                <h2>Selecciona el día de entrega</h2>
                <ShippingDateSelect
                  dateCallback={this._returnPickupDateFromChild}
                />
                <p className="text-box">
                  Recibirás un correo de confirmación de que hemos recibido tu
                  pedido y pago.
                </p>
                <p className="text-box">
                  <b>RECIBIMOS PEDIDOS HASTA LAS 20:00</b> del día anterior a
                  despacho con transferencia realizada.
                </p>
                <CheckoutButton
                  shippingDate={this.state.shippingDate}
                  formData={this.state.formData}
                />
              </div>
            </div>
            <div className="row">
              <h2>Condiciones del servicio</h2>
            </div>
            <div className="row">
              <div className="col">
                <ul className="legal">
                  <li>
                    <b>HORARIO ENTREGA</b> (10:00 A 18:00)
                  </li>
                  <li>
                    <b>DESPACHO GRATIS</b> a partir de $18.000 compra.
                  </li>
                  <li>
                    <b>DISPONIBILIDAD DE PRODUCTOS</b> sujeto a la
                    disponibilidad de la empresa, la que será informada al
                    momento de hacer el pedido.
                  </li>
                  <li>
                    <b>GARANTIA</b> Si recibes un producto que no cumple tus
                    expectativas, puedes escribirnos un correo o whatsapp, para
                    ofrecerte una solución.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
