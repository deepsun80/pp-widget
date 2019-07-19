import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../utlis/theme";
import App from "../components/App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App title="ppWidget" />
  </ThemeProvider>,
  document.getElementById("ppWidget")
);
