import React from "react";
import { Redirect, Route, Switch } from "react-router";
import {
  ROUTES__INITIALIZE,
  ROUTES__INITIALIZE_SELECT_ACTION,
  ROUTES__INITIALIZE_WELCOME,
  ROUTES__WALLET
} from "../constants";
import { useSatchel } from "../context/satchel/SatchelProvider";
import CreateOrRecoverWallet from "./CreateOrRecoverWallet";
import Welcome from "./Welcome";

const Initialize = () => {
  const { isAuthenticated } = useSatchel();

  return !isAuthenticated() ? (
    <Switch>
      <Route
        exact
        path={`${ROUTES__INITIALIZE}${ROUTES__INITIALIZE_WELCOME}`}
        component={Welcome}
      />
      <Route
        exact
        path={`${ROUTES__INITIALIZE}${ROUTES__INITIALIZE_SELECT_ACTION}`}
        component={CreateOrRecoverWallet}
      />
      <Redirect to={`${ROUTES__INITIALIZE}${ROUTES__INITIALIZE_WELCOME}`} />
    </Switch>
  ) : (
    <Redirect to={ROUTES__WALLET} />
  );
};

export default Initialize;
