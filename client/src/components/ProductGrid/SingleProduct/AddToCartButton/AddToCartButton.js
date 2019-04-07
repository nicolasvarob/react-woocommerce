import React from 'react';
//import PropTypes from 'prop-types';
import './AddToCartButton.css';

const Button = ({ onClick, children, className }) => {
    return (
        <a href="#access" onClick={onClick} className={`btn btn-primary ${className}`}>{children}</a>
    );
}

/* Button.propTypes = {
    onClick: PropTypes.func.required
} */

export default Button;