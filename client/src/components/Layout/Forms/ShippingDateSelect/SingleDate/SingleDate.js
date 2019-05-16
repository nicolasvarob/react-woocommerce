import React from "react";

const SingleDate = props => {
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
  return (
    <div className="card single-date">
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center header">{monthName[props.month]}</li>
        <li className="list-group-item text-center body">{props.day}</li>
      </ul>
    </div>
  );
};

export default SingleDate;
