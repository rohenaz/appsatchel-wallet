import { DescriptionList, Page } from "@shopify/polaris";
import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTES__INITIALIZE } from "../constants";
import { useSatchel } from "../context/satchel/SatchelProvider";

const Wallet = () => {
  let history = useHistory();
  const { satchel, isAuthenticated, logout } = useSatchel();

  if (!isAuthenticated()) {
    history.push(ROUTES__INITIALIZE);
  }

  return (
    <Page
      title="My Satchel Wallet"
      primaryAction={{ content: "Logout", onAction: logout }}
    >
      <DescriptionList
        items={[
          {
            term: "Address",
            description: satchel.address().toString()
          },
          {
            term: "Balance",
            description: `${satchel.balance()} satoshis`
          },
          {
            term: "Mnemonic",
            description: satchel.mnemonic()
          },
          {
            term: "QR",
            description: <img src={satchel.qrCode()} alt="Deposit Address" />
          }
        ]}
      />
    </Page>
  );
};

export default Wallet;
