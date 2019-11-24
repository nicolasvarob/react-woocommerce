import React from "react";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import { connect } from "react-redux";

import { resetCart } from "../../store/cart";
import DatosTransferencia from "../../components/Checkout/DatosTransferencia/DatosTransferencia";
import numberFormat from '../../functions/tochileanpesos';

import dateTranslate from '../../functions/dateTranslate.js';

import "./Confirmation.css";

const Confirmation = props => {
  const order = JSON.parse(localStorage.prevOrder);
  if (props.location.state) {
    props.resetCart();
  }

  return (
    <div id="app">
      <div id="othercontent" className="container">
        <Navbar hidden={true} />
        <div className="row">
          <div className="col">
            <h1>¡Gracias por su compra!</h1>
            <p>Los detalles de su compra han sido enviados.</p>
            <p>
              Favor transferir el monto dentro de los próximos minutos, su orden
              llegará entre 10:00 y 18:00 el día <b>{dateTranslate(props.location.state.shippingDate)} .</b>
            </p>
          </div>
        </div>
        <div className="row">
          <h2>Datos de transferencia</h2>
          <DatosTransferencia />
          <h2><b>Total</b> ${numberFormat(order.total)}</h2>
        </div>
        <div className="row">
          <div className="col text-center">
            <img
              className="confirmation-image"
              alt="lapicaflor"
              src={require("../../assets/grocery-bag.jpg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  resetCart
};

export default connect(null, mapDispatchToProps)(Confirmation);
