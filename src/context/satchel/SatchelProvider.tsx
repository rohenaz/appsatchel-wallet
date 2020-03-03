import satchel from "bsv-satchel";
import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES__INITIALIZE, ROUTES__WALLET } from "../../constants";

type ContextValue = {
  satchel: any; // TODO: abstract this object away and provide the required methods
  isAuthenticated: () => boolean;
  recoverWallet: (seedPhrase: string) => Promise<void>;
  createNewWallet: () => Promise<void>;
  logout: () => void;
};

const AuthContext = React.createContext<ContextValue | undefined>(undefined);

const SatchelProvider = (props: any) => {
  const history = useHistory();

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

  const recoverWallet = useCallback(
    async (seedPhrase: string) => {
      if (!seedPhrase) {
        return;
      }

      await satchel.login(seedPhrase);

      if (satchel.isLoggedIn()) {
        history.push(ROUTES__WALLET);
      } else {
        throw new Error("Could not recover wallet based on provided mnemonic");
      }
    },
    [history]
  );

  const createNewWallet = useCallback(async () => {
    if (satchel.isLoggedIn()) {
      alert("already logged in");
    } else {
      await satchel.new();
      history.push(ROUTES__WALLET);
    }
  }, [history]);

  const logout = useCallback(() => {
    if (satchel.isLoggedIn()) {
      satchel.logout();
      history.push(ROUTES__INITIALIZE);
    }
  }, [history]);

  const value = useMemo(
    () => ({
      satchel,
      isAuthenticated: satchel.isLoggedIn,
      recoverWallet,
      createNewWallet,
      logout
    }),
    [createNewWallet, logout, recoverWallet]
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
