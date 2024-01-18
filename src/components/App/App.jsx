import React from "react";
import axios from "axios";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PizzaList from "../PizzaList/PizzaList";
import CustomerInfo from "../CustomerInfo/CustomerInfo";
import Checkout from "../Checkout/Checkout";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
      </div>

      <div>
        <Router>
            <Route path="/" exact>
              <PizzaList />
            </Route>
            <Route path="/customerinfo/">
              <CustomerInfo />
            </Route>
            <Route path="/checkout/">
              <Checkout />
            </Route>
        </Router>
      </div>
    </>
  );
}

export default App;
