import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../utlis/theme";
import App from "./App";

const title = "PP Widget";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App title={title} />
  </ThemeProvider>,
  document.getElementById("pp-widget")
);

module.hot.accept();
