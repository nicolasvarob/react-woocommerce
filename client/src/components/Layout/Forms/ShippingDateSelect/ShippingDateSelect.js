import React, { Component } from "react";
import SingleDate from "./SingleDate/SingleDate";

import "./SingleDate/SingleDate.css";
import { throws } from "assert";
class componentName extends Component {
  state = {
    dates: [],
    shippingDate: null
  };

  componentDidMount() {
    //Fija las siguiente fecha de envio según la fecha
    function setDay(date, dayOfWeek) {
      date = new Date(date.getTime());
      date.setDate(date.getDate() + ((dayOfWeek + 7 - date.getDay()) % 7));
      return date;
    }

    function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }

    const today = new Date();
    const d1 = setDay(today, 2);
    const d2 = setDay(today, 4);
    const d3 = addDays(d1, 7);
    const d4 = addDays(d2, 7);
    this.setState({ dates: [d1, d2, d3, d4] });
  }

  _setdate = (date) => {
    this.setState({shippingDate:date})
    console.log(this.state)
  }

  render() {
    const dates = this.state.dates.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    const showShippingDates = dates.map(i => (
      <div onClick={ () => this._setdate(i) } key={i} className="col-sm">
        <SingleDate
          
          day={i.getDate()}
          month={i.getMonth()}
        />
      </div>
    ));

    return (
      <div className="container">
        <div className="row">{showShippingDates}</div>
      </div>
    );
  }
}

export default componentName;
