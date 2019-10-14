import React, { Component } from "react";

class SingleDate extends Component {


  render() {
    const monthName = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ];
    const nameOfDay = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado"
    ];

    const cardStyle =
      this.props.active === false
        ? "card single-date"
        : "card single-date active";

    return (
      <div className={cardStyle}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center header">
            {monthName[this.props.month]}
          </li>
          <li className="list-group-item text-center body">
            <p>{this.props.day}</p>
            <p className="smaller">{nameOfDay[this.props.dayOfWeek]}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default SingleDate;
