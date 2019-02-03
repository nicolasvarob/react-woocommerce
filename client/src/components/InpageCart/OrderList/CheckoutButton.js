import React from 'react';
import { NavLink } from 'react-router-dom';

const CheckoutButton = () => {
    return (
        <NavLink to="/checkout"><button type="button" class="btn btn-info">CHECKOUT</button></NavLink>
    );
};

export default CheckoutButton;