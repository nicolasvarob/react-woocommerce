import React, { Component } from 'react';

import './OrderListItem.css'

const OrderListItem = (props) => {
    return (
        <tr>
            <th scope="row"><img alt="ads" src={props.img} /></th>
            <td><span>{props.name}</span>{/* <span>$5.000</span> */}</td>
            <td className="align-middle"><span>+</span> {props.qty} <span> - </span></td>
        </tr>
    );
}

export default OrderListItem;