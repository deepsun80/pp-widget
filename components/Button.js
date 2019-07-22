import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const Button = ({ logo }) => (
  <div>
    <Typography variant="caption">Pay with &nbsp;</Typography>
    <img alt="Paypossible Logo" title="Paypossible Logo" src={logo} />
  </div>
);

Button.defaultProps = {
  logo: ""
};

Button.propTypes = {
  logo: PropTypes.string
};

export default Button;
