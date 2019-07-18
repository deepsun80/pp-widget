import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import theme from "../utlis/theme";
import App from "./App";
import configureStore from "../redux/store";

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App title="ppWidget" />
    </Provider>
  </ThemeProvider>,
  document.getElementById("ppWidget")
);
