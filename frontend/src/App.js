import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Views
import HomeView from "./views/HomeView/HomeView";
import ProductView from "./views/ProductView/ProductView";
import CartView from "./views/CartView/CartView";

import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";

export default function App() {
  const [drawerToggle, setDrawerToggle] = useState(false);

  return (
    <BrowserRouter>
      <Navbar toggle={() => setDrawerToggle(true)} />
      <SideDrawer show={drawerToggle} toggle={() => setDrawerToggle(false)} />
      <Backdrop show={drawerToggle} toggle={() => setDrawerToggle(false)} />

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
