import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import CategoryProductPage from './views/CategoryProductPage'
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import Checkout from './views/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/categoria/:name" component={CategoryProductPage} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
