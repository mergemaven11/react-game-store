import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './components/cart/context';

import StoreProductsPage from './pages/store'
import ConfirmCartPage from './pages/getCart';

import GlobalStyles from './components/styled/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <CartProvider>
        <Switch>
          <Route exact path="/" component={StoreProductsPage} />
          <Route exact path="/confirm-cart" component={ConfirmCartPage} />
        </Switch>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

