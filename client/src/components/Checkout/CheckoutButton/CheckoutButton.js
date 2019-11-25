import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import MainButton from "../../UI/Buttons/MainButton";

class CheckoutButton extends Component {
  state = {
    redirect: false,
    errorResponse: false
  };

  _sendProducts = async () => {
    const validateFormFields = params => {
      var p = Object.keys(params);
      let error;
      p.forEach(i => {
        if (i === "apt") return;
        if (!params[i]) error = true;
      });
      if (error) return false;
      else return true;
    };
    const cart = this.props.cartItems;
    const formData = this.props.formData;
    const items = cart.map(i => {
      //Fija el precio si esta en promoción o no
      let price;
      if (i.on_sale) price = i.sale_price;
      else price = i.price;

      return { name: i.name, price: price, qty: i.qty, measure: i.measure };
    });
    if (cart) {
      if (cart.length < 1) {
        return console.log("error ! Carro vacío");
      }
    } else {
      return console.log("error ! Carro vacío");
    }
    let total = 0;
    if (cart) {
      await cart.forEach(i => (total += i.price * i.qty));
    }
    console.log(total)
    const payload = {
      date: this.props.shippingDate,
      cart: items,
      total: total,
      formData: formData
    };
    //Validaciones
    if (!payload.date) {
      return this.setState({ errorResponse: "Favor elegir fecha de despacho" });
    }
    const validationError = await validateFormFields(payload.formData);
    console.log(validationError);
    if (!validationError) {
      return this.setState({ errorResponse: "Favor llenar todos los campos" });
    }
    //Send payload to email API
    const res = await fetch("/api/sender", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const status = await res.status;
    if (status >= 200 && status < 300) {
      localStorage.prevOrder = JSON.stringify(payload);
      this.setState({ redirect: "/checkout/thank-you" });
    } else {
      this.setState({
        errorResponse: "Error de conexión. Por favor intente más tarde."
      });
      console.log(
        "Error de conexión. Por favor intente más tarde. Codigo de error: " +
          status
      );
    }
  };

  render() {
    let error;
    if (this.state.errorResponse)
      error = <p className="text-danger">{this.state.errorResponse}</p>;
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirect,
            state: {
              from: "checkout",
              shippingDate: this.props.shippingDate,
              formData: this.props.formData
            }
          }}
        />
      );
    } else {
      return (
        <Fragment>
          <MainButton
            type="secondary"
            text="SEGUIR COMPRANDO"
            onClick={() => this.setState({ redirect: "/" })}
          />
          <MainButton
            text="ENVIAR PEDIDO"
            onClick={() => this._sendProducts()}
          />
          {error}
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state, { product }) => {
  const { cart } = state;
  return cart;
};

export default connect(mapStateToProps)(CheckoutButton);
