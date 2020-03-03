import { EmptyState } from "@shopify/polaris";
import React from "react";
import {
  ROUTES__INITIALIZE,
  ROUTES__INITIALIZE_SELECT_ACTION
} from "../constants";

const Welcome = () => (
  <EmptyState
    heading="Welcome to Satchel Wallet"
    action={{
      content: "Get Started",
      url: `${ROUTES__INITIALIZE}${ROUTES__INITIALIZE_SELECT_ACTION}`
    }}
    image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  >
    <p>
      Satchel Wallet is a safe wallet for Bitcoin SV that you can use with many
      DApps.
    </p>
  </EmptyState>
);

export default Welcome;
