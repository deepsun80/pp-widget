import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";

const Error = ({ name, ...classes }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? (
        <Typography
          variant="caption"
          color="error"
          align="center"
          display="block"
          className={classes.error}
        >
          {error}
        </Typography>
      ) : null
    }
  />
);

Error.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default Error;
