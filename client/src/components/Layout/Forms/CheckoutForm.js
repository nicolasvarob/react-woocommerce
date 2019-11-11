import React, { Component } from "react";
import { connect } from "react-redux";
import { updateForm } from "../../../actions/formAction";

class CheckoutForm extends Component {
  state = {
    fullname: null,
    email: null,
    address: null,
    apt: null,
    comuna: null
  };

  _changeHandler = e => {
    let obj = {};
    if (e.target.name) {
      obj = { [e.target.name]: e.target.value };
    } else return;
    //this.props.updateForm(this.state);
    this.setState(obj);
    this.props.formDataCallback(this.state);
  };

  render() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col">
            <label>Nombre completo</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              className="form-control"
              value={this.state.fullname}
              placeholder="Nombre completo"
              onChange={this._changeHandler}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <label>Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={this.state.email}
              placeholder="Email"
              onChange={this._changeHandler}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <label>Teléfono</label>
            <input
              name="phone"
              type="text"
              className="form-control"
              value={this.state.phone}
              placeholder="Número de teléfono"
              onChange={this._changeHandler}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <label>Comuna</label>
            <input
              name="comuna"
              type="text"
              className="form-control"
              value={this.state.comuna}
              placeholder="Comuna"
              onChange={this._changeHandler}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-12 col-8">
            <label>Dirección</label>
            <input
              name="address"
              type="text"
              className="form-control"
              value={this.state.address}
              onChange={this._changeHandler}
              placeholder="Dirección"
            />
          </div>
          <div className="form-group col-sm-6 col-4">
            <label>
              Dpto. <i>(Opcional)</i>
            </label>
            <input
              name="apt"
              type="text"
              className="form-control"
              value={this.state.apt}
              onChange={this._changeHandler}
              placeholder="Nº de dpto."
            />
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateForm: (params) => dispatch(updateForm(params))
  };
};

const mapStateToProps = state => {
  return {
    form: state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutForm);
