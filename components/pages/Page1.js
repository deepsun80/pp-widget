import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import { RenderTextField } from "../../utlis/input";
import Wizard from "../Wizard";
import useStyles from "./styles";

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

const Page1 = ({ error }) => {
  console.log(error);
  const classes = useStyles();

  return (
    <Wizard.Page>
      <Typography variant="h1" align="center" className={classes.h1}>
        Welcome to PayPossible
      </Typography>
      <Typography variant="body1" align="center" className={classes.h1}>
        First, enter the PayPossible ID of the business where you are looking to
        make a purchase.
      </Typography>
      <Field
        name="payId"
        type="text"
        component={RenderTextField}
        label="PayPossible ID"
      />
      {error && (
        <Typography variant="caption" color="error" align="center">
          {error}
        </Typography>
      )}
      <Error name="payId" />
    </Wizard.Page>
  );
};

Error.propTypes = {
  name: PropTypes.string.isRequired
};

Page1.propTypes = {
  error: PropTypes.any.isRequired
};

export default Page1;
