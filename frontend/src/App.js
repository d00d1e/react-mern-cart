import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Views
import HomeView from "./views/HomeView/HomeView";
import ProductView from "./views/ProductView/ProductView";
import CartView from "./views/CartView/CartView";

import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SideDrawer />

      <main>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/product/:id" component={ProductView} />
          <Route exact path="/cart" component={CartView} />
        </Switch>
      </main>
      {/* backdrop */}

      {/* homescreen */}
      {/* productscreen */}
      {/* cartscreen */}
    </BrowserRouter>
  );
}
