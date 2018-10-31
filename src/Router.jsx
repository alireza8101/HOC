import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import SignIn from "./Components/Auth/SignIn";
import { Switch } from "react-router";
import Navigation from "./Components/Navigation";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
