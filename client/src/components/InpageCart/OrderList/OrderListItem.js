import React from 'react';
import Incrementer from './Incrementers/Incrementer';

import './OrderListItem.css'

const OrderListItem = (props) => {
    return (
        <tr>
            <th scope="row"><img alt="ads" src={props.img} /></th>
            <td><span>{props.name}</span>{/* <span>$5.000</span> */}</td>
            <td className="align-middle"> <div className="incrementWrapper "><Incrementer id={props.id} operation="decrement"/><span>{props.qty}</span><Incrementer id={props.id} operation="increment"/> </div></td>
        </tr>
    );
}

export default OrderListItem;