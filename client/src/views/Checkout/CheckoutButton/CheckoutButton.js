import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CheckoutButton extends Component {
  state = {
    redirect: false
  };

  _sendProducts = async () => {
    const cart = this.props.cartItems;
    const items = cart.map(i => {
      //Fija el precio si esta en promoción o no
      let price;
      if(i.on_sale) price = i.sale_price;
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

    var drop = {
      date: this.props.shippingDate,
      cart: items
    }

    const res = await fetch("/api/sender", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(drop)
    });
    const status = await res.status;
    if (status >= 200 && status < 300) this.setState({ redirect: true });
    else
      console.log(
        "Error de conexión. Por favor intente más tarde. Codigo de error: " +
          status
      );
  };

  render() {
    if (this.state.redirect)
      return (
        <Redirect
          to={{
            pathname: "/checkout/thank-you",
            state: { from: "checkout" }
          }}
        />
      );
    else {
      return (
        <button
          onClick={() => this._sendProducts()}
          type="button"
          className="btn btn-success "
        >
          COMPRAR
        </button>
      );
    }
  }
}

const mapStateToProps = (state, { product }) => {
  const { cart } = state;
  return cart;
};

export default connect(mapStateToProps)(CheckoutButton);
