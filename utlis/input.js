import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";

const RenderTextField = ({
  input,
  label,
  meta: { touched, error },
  className,
  ...custom
}) => (
  <div className={className}>
    <TextField
      id="outlined-textarea"
      variant="outlined"
      fullWidth
      label={label}
      error={touched && error}
      {...input}
      {...custom}
    />
    <Typography variant="subtitle2" align="center" color="error">
      {touched && error}
    </Typography>
  </div>
);

const RenderCheckbox = ({ input, label }) => (
  <Checkbox label={label} checked={!!input.value} onCheck={input.onChange} />
);

const RenderRadioGroup = ({ input, className, ...custom }) => (
  <RadioGroup
    {...input}
    {...custom}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
    className={className}
  />
);

const RenderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <div>
    <Select
      floatingLabelText={label}
      error={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      {...children}
      {...custom}
    />
    <Typography variant="subtitle2" align="center" color="error">
      {touched && error}
    </Typography>
  </div>
);

RenderTextField.defaultProps = {
  custom: null,
  label: ""
};

RenderTextField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  meta: PropTypes.any.isRequired,
  className: PropTypes.any.isRequired,
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
  className: PropTypes.any.isRequired,
  custom: PropTypes.any
};

RenderSelectField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  custom: PropTypes.any.isRequired
};

export { RenderTextField, RenderRadioGroup };
