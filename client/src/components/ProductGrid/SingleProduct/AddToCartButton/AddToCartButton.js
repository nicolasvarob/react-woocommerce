import React from 'react';
import PropTypes from 'prop-types';
import './AddToCartButton.css';

const Button = ({onClick, children, className}) => (
    <a href="#access" onClick={onClick} className={`btn btnStyles btn-primary bg-green ${className}`}>{children}</a>
);

Button.propTypes = {
    onClick: PropTypes.func.required
}

export default Button;