import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const RenderTextField = ({ input, label, ...inputProps }) => (
  <TextField
    id="outlined-textarea"
    type="tel"
    variant="outlined"
    fullWidth
    label={label}
    {...input}
    {...inputProps}
    style={{ marginBottom: 30 }}
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

const RenderSelectField = ({
  name,
  label,
  values,
  onChange,
  children,
  input
}) => (
  <FormControl variant="outlined" fullWidth style={{ marginBottom: 30 }}>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Select
      value={values}
      onChange={onChange}
      input={<OutlinedInput name={name} id={name} />}
      {...input}
    >
      {children}
    </Select>
  </FormControl>
);

RenderTextField.defaultProps = {
  label: ""
};

RenderTextField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  meta: PropTypes.any.isRequired
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

RenderSelectField.defaultProps = {
  name: "",
  label: ""
};

RenderSelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.any.isRequired,
  input: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

export { RenderTextField, RenderRadioGroup, RenderSelectField };
