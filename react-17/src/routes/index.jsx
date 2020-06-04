import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthorizeRoute from "./AuthorizeRoute";
import LoginRoute from "./LoginRoute";
import DashboardRoute from "./DashboardRoute";
import { PrivateRoute } from "../containers";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LoginRoute}></Route>
    <Route exact path="/authorize" component={AuthorizeRoute}></Route>
    <PrivateRoute path="/dashboard" comp={DashboardRoute} />
  </Switch>
);

export default Routes;
