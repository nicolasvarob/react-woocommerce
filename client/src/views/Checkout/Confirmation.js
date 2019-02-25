import React from 'react';
import Navbar from '../../components/Navigation/Navbar/Navbar';


const Confirmation = () => {
    return (
        <div id="app">
            <div id="content" className="container">
                <Navbar/>
                <h1>¡Gracias por su compra!</h1>
                <p>Los detalles de su compra han sido enviados.</p>
                <p>Favor transferir el monto dentro de los próximos minutos, su orden llegará entre 16:00 y 21:00 el día <b>Jueves 8 de Diciembre</b></p>
            </div>
        </div>
    );
};

export default Confirmation;