import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../views/screens/cart";
import Homepage from "../views/screens/homepage";
import Product from "../views/screens/product";
import Search from "../views/screens/search";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={Search} />
        <Route path="/product/:product_id" component={Product} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
