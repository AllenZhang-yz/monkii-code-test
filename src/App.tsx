import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductsList from './pages/ProductsList';
import Product from './pages/Product';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route exact path="/product/:id" component={Product} />
      </Switch>
    </Router>
  );
};

export default App;
