import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/styles.css";
import React from "react";
import { Router } from "react-router";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { history } from "./router/history";
import { SatchelProvider } from "./satchel/SatchelProvider";

export const AppProviders = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <AppProvider i18n={enTranslations}>
        <SatchelProvider>{children}</SatchelProvider>
      </AppProvider>
    </Router>
  </ThemeProvider>
);
