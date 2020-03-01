import { Location } from "history";
import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";
import {
  ROUTES__INITIALIZE,
  ROUTES__INITIALIZE_SELECT_ACTION,
  ROUTES__INITIALIZE_WELCOME
} from "../constants";
import { useSatchel } from "../context/satchel/SatchelProvider";
import CreateOrRecoverWallet from "./CreateOrRecoverWallet";
import Welcome from "./Welcome";

const Initialize = ({ location }: RouteComponentProps<any>) => {
  const { isAuthenticated } = useSatchel();
  const { from } = (location.state as { from: Location } | undefined) || {
    from: { pathname: "/" }
  };

  return !isAuthenticated() ? (
    <Switch>
      <Route
        path={`${ROUTES__INITIALIZE}${ROUTES__INITIALIZE_WELCOME}`}
        component={Welcome}
      />
      <Route
        path={`${ROUTES__INITIALIZE}${ROUTES__INITIALIZE_SELECT_ACTION}`}
        component={CreateOrRecoverWallet}
      />
      <Redirect to={`${ROUTES__INITIALIZE}${ROUTES__INITIALIZE_WELCOME}`} />
    </Switch>
  ) : (
    <Redirect to={from} />
  );
};

export default Initialize;
