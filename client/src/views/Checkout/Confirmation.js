import React from 'react';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import { connect } from 'react-redux';

import { resetCart } from '../../store/cart'

const Confirmation = (props) => {
    if(props.location.state){
        console.log('reset cart')
        props.resetCart();
    }

    return (
        <div id="app">
            <div id="content" className="container">
                <Navbar hidden={true}/>
                <div className="row">
                    <div className="col">
                        <h1>¡Gracias por su compra!</h1>
                        <p>Los detalles de su compra han sido enviados.</p>
                        <p>Favor transferir el monto dentro de los próximos minutos, su orden llegará entre 16:00 y 21:00 el día <b>Jueves 8 de Diciembre.</b></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <img alt="lapicaflor" src={require('../../assets/grocery-bag.jpg')} />
                    </div>
                </div>
            </div>
        </div>
    );
};


const mapDispatchToProps = {
    resetCart
  }

export default connect(null, mapDispatchToProps)(Confirmation);