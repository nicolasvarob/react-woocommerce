import React, { Component } from 'react';
import { incrementer } from '../../../../actions/cartAction'
import { connect } from 'react-redux';

import 'font-awesome/css/font-awesome.min.css';

class Incrementer extends Component {

    Increment = () => {
        this.props.incrementer(this.props.id,this.props.operation)
    }

    render() {

        let sign;
        if(this.props.operation==="increment"){
            sign = <i className="fa fa-plus"></i>
        } else {
            sign = <i className="fa fa-minus"></i>
        }
        return (
            <a href="#" className="btn btn-primary qtyBtn" onClick={this.Increment}>{sign}</a>
        );
    }
}

export default connect(null,{ incrementer })(Incrementer);
