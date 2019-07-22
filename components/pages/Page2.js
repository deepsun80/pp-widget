import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import Wizard from "../Wizard";
import useStyles from "./styles";
import { RenderTextField } from "../../utlis/input";

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

const Page2 = () => {
  const classes = useStyles();

  return (
    <Wizard.Page>
      <Typography variant="h4" align="center" className={classes.h1}>
        Tell us more about your purchase
      </Typography>
      <Field
        name="firstName"
        type="text"
        component={RenderTextField}
        label="First Name"
      />
      <Error name="firstName" />
    </Wizard.Page>
  );
};

Error.propTypes = {
  name: PropTypes.string.isRequired
};

export default Page2;
