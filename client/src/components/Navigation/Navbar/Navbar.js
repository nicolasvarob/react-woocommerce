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
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/verduras">Verduras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/frutas">Frutas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/dulces">Dulces</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria/productos-artesanales">Artesanal</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <InpageCartDesktop />
                    </span>
                </div>
            </div>
        </nav>
        <div className="collapse" id="collapseExample" >
            <div className="card card-body">
                <OrderList />
            </div>
        </div>
    </header>
);

export default Navbar;






























