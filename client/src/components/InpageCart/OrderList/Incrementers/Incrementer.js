import React, { Component } from 'react';
import { incrementer } from '../../../../actions/cartAction'

import { connect } from 'react-redux';
class Incrementer extends Component {

    Increment = () => {
        this.props.incrementer(this.props.id,this.props.operation)
    }

    render() {
        return (
            <span onClick={this.Increment}>+</span>
        );
    }
}

export default connect(null,{ incrementer })(Incrementer);
