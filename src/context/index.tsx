import React from "react";
import { Router } from "react-router";
import { ThemeProvider } from "styled-components/macro";
import { theme } from "../theme/theme";
import { history } from "./router/history";
import { SatchelProvider } from "./satchel/SatchelProvider";

export const AppProviders = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <SatchelProvider>{children}</SatchelProvider>
    </Router>
  </ThemeProvider>
);
