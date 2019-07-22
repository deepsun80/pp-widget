import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";

const RenderTextField = ({ input, label, ...custom }) => (
  <TextField
    id="outlined-textarea"
    variant="outlined"
    fullWidth
    label={label}
    {...input}
    {...custom}
  />
);

const RenderCheckbox = ({ input, label }) => (
  <Checkbox label={label} checked={!!input.value} onCheck={input.onChange} />
);

const RenderRadioGroup = ({ input, ...custom }) => (
  <RadioGroup
    {...input}
    {...custom}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const RenderSelectField = ({ input, label, children, ...custom }) => (
  <Select
    floatingLabelText={label}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    {...children}
    {...custom}
  />
);

RenderTextField.defaultProps = {
  custom: null,
  label: ""
};

RenderTextField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  meta: PropTypes.any.isRequired,
  custom: PropTypes.any
};

RenderCheckbox.defaultProps = {
  label: "",
  onChange: () => {}
};

RenderCheckbox.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
};

RenderRadioGroup.defaultProps = {
  custom: null,
  label: "",
  onChange: () => {}
};

RenderRadioGroup.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  custom: PropTypes.any
};

RenderSelectField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  custom: PropTypes.any.isRequired
};

export { RenderTextField, RenderRadioGroup, RenderSelectField };
