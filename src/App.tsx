import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { ROUTES__INITIALIZE, ROUTES__WALLET } from "./constants";
import InitializeRoutes from "./initialize/InitializeRoutes";
import Wallet from "./wallet/Wallet";

const App = () => (
  <Switch>
    <Route path={ROUTES__INITIALIZE} component={InitializeRoutes} />
    <Route path={ROUTES__WALLET} component={Wallet} />
    <Redirect to={ROUTES__WALLET} />
  </Switch>
);

export default App;
