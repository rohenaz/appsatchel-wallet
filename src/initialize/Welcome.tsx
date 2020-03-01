import React from "react";
import { Link } from "react-router-dom";
import {
  ROUTES__INITIALIZE,
  ROUTES__INITIALIZE_SELECT_ACTION
} from "../constants";

const Welcome = () => (
  <>
    <h1>Welcome to Satchel Wallet</h1>
    <p>
      Satchel Wallet is a safe wallet for Bitcoin SV that can be used in many
      DApps.
    </p>
    <Link to={`${ROUTES__INITIALIZE}${ROUTES__INITIALIZE_SELECT_ACTION}`}>
      Get Started
    </Link>
  </>
);

export default Welcome;
