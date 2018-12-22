import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { incrementer } from '../../../../actions/cartAction'

import { connect } from 'react-redux';
class Incrementer extends Component {

    Increment = () => {
        this.props.incrementer('123','increment')
    }

    render() {
        return (
            <span onClick={this.Increment}>+</span>
        );
    }
}

export default connect(null,{ incrementer })(Incrementer);
