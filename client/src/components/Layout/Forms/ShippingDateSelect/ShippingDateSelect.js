import React, { Component } from 'react';
import SingleDate from './SingleDate';

import './SingleDate.css'
class componentName extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Fecha de envío</h2>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <SingleDate text="Lunes 5 de Diciembre" />
                    </div>
                    <div className="col-sm">
                        <SingleDate text="Jueves 8 de Diciembre" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <SingleDate text="Lunes 12 de Diciembre" />
                    </div>
                    <div className="col-sm">
                        <SingleDate text="Jueves 15 de Diciembre" />
                    </div>
                </div>
            </div>
        );
    }
}

export default componentName;