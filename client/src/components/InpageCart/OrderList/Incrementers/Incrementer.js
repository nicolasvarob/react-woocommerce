import React, { Component } from 'react';
import { incrementer } from '../../../../actions/cartAction'

import { connect } from 'react-redux';

import './Incrementer.css'

class Incrementer extends Component {

    Increment = () => {
        this.props.incrementer(this.props.id,this.props.operation)
    }

    render() {

        let sign;
        if(this.props.operation==="increment"){
            sign = "+"
        } else {
            sign = "-"
        }
        return (
            <span className="incrementer" onClick={this.Increment}>{sign}</span>
        );
    }
}

export default connect(null,{ incrementer })(Incrementer);
