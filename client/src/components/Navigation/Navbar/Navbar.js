import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import InpageCartDesktop from '../../InpageCart/Desktop/InpageCartDesktop'

import OrderList from '../../InpageCart/OrderList/OrderList';

const Navbar = props => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <NavLink className="navbar-brand" to="/"><img alt="lapicaflor" src={require('../../../assets/logo.png')}></img></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/verduras">Vegetales</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/frutas">Frutas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/dulces">Frutos Secos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/productos-artesanales">Granos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/productos-artesanales">Emporio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/productos-artesanales">Condimentos</NavLink>
                        </li>
                    </ul>
                </div>
                <InpageCartDesktop />
            </div>
        </nav>
        <div className="collapse" id="sidebar-cart" >
            <div className="card card-body">
                <div className="row">
                    <div className="col-10">
                        <h4 className="card-title">Carro de compras</h4>
                    </div>
                    <div className="col-2">
                        <button className="close-sidebar-cart" type="button" data-toggle="collapse" data-target="#sidebar-cart" aria-expanded="false" aria-controls="collapseExample">
                            X
                        </button>
                    </div>
                </div>
                <OrderList />
            </div>
        </div>
    </header>
);

export default Navbar;






























