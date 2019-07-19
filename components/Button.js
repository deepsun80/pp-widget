import React from "react";
import Typography from "@material-ui/core/Typography";

const Button = () => (
  <div>
    <Typography variant="caption">Pay with &nbsp;</Typography>
    <img
      alt="Paypossible Logo"
      title="Paypossible Logo"
      src={require("../utlis/payPossibleLogo.png")}
    />
  </div>
);

export default Button;
