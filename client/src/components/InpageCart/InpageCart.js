import React, { Component } from 'react';
import OrderList from './OrderList/OrderList';


import './InpageCart.css';

class InpageCart extends Component {
    //TODO: El boton hacerlo componente reutilizable
    render() {
        return (
            <div className="fixed-bottom d-xs-block d-sm-block d-md-block d-lg-none">
                <button className="btn btn-primary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Show cart content
                </button>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <OrderList />
                    </div>
                </div>
            </div>
        );
    }
}

export default InpageCart; 