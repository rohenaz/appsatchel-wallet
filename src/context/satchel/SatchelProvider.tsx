import satchel from "bsv-satchel";
import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES__INITIALIZE } from "../../constants";

type ContextValue = {
  satchel: any; // TODO: abstract this object away and provide the required methods
  isAuthenticated: () => boolean;
  recoverWallet: () => Promise<void>;
  createNewWallet: () => Promise<void>;
};

const AuthContext = React.createContext<ContextValue | undefined>(undefined);

const SatchelProvider = (props: any) => {
  let history = useHistory();

  const socketCallback = useCallback(
    (data: any) => {
      // Here you can react to wallet messages in your UI
      console.log("socket callback", data);

      if (!satchel.isLoggedIn()) {
        console.log("not logged in -> redirect to initialize page");
        history.push(ROUTES__INITIALIZE);
      }
    },
    [history]
  );

  useEffect(() => {
    satchel.init({
      feePerKb: 1337,
      bitsocketCallback: socketCallback,
      bitIndexApiKey: process.env.REACT_APP_BIT_INDEX_API_KEY,
      planariaApiKey: process.env.REACT_APP_PLANARIA_API_KEY
    });
  }, [socketCallback]);

  const recoverWallet = useCallback(async () => {
    let login = prompt("Enter a 12 word mnemonic");
    if (!satchel.login) {
      return;
    }
    await satchel.login(login);
    if (satchel.isLoggedIn()) {
      console.log("logged in");
      // await walletLoaded()
    } else {
      alert("Could not recover wallet based on provided mnemonic");
    }
  }, []);

  const createNewWallet = useCallback(async () => {
    if (satchel.isLoggedIn()) {
      alert("already logged in");
    } else {
      await satchel.new();
    }
  }, []);

  const value = useMemo(
    () => ({
      satchel,
      isAuthenticated: satchel.isLoggedIn,
      recoverWallet,
      createNewWallet
    }),
    [createNewWallet, recoverWallet]
  );

  return <AuthContext.Provider value={value} {...props} />;
};

const useSatchel = (): ContextValue => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useSatchel must be used within an SatchelProvider");
  }
  return context;
};

export { SatchelProvider, useSatchel };
