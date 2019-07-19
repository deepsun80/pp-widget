import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import Wizard from "../Wizard";
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

const Page2 = () => (
  <Wizard.Page>
    <Field
      name="firstName"
      type="text"
      component={RenderTextField}
      label="First Name"
    />
    <Error name="firstName" />
  </Wizard.Page>
);

Error.propTypes = {
  name: PropTypes.string.isRequired
};

export default Page2;
