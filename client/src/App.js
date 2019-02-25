import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Home from './views/Home';
import CategoryProductPage from './views/CategoryProductPage'
import Checkout from './views/Checkout/Checkout';
import Confirmation from './views/Checkout/Confirmation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/categoria/:name" component={CategoryProductPage} />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/checkout/thank-you" component={Confirmation} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
