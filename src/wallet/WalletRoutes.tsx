import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";
import {
  ROUTES__INITIALIZE,
  ROUTES__WALLET,
  ROUTES__WALLET_INFO,
  ROUTES__WALLET_TRANSACTIONS
} from "../constants";
import { useSatchel } from "../context/satchel/SatchelProvider";
import Transactions from "./Transactions";
import Wallet from "./Wallet";
import WalletInfo from "./WalletInfo";

const WalletRoutes = ({ location }: RouteComponentProps<any>) => {
  const { isAuthenticated } = useSatchel();

  return isAuthenticated() ? (
    <>
      <Wallet />
      <Switch>
        <Route
          path={`${ROUTES__WALLET}${ROUTES__WALLET_INFO}`}
          component={WalletInfo}
        />
        <Route
          path={`${ROUTES__WALLET}${ROUTES__WALLET_TRANSACTIONS}`}
          component={Transactions}
        />
        <Redirect to={`${ROUTES__WALLET}${ROUTES__WALLET_INFO}`} />
      </Switch>
    </>
  ) : (
    <Redirect
      to={{
        pathname: ROUTES__INITIALIZE,
        state: { from: location }
      }}
    />
  );
};

export default WalletRoutes;
