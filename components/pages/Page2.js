import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Wizard from "../Wizard";
import Error from "../Error";
import useStyles from "./styles";
import { RenderTextField, RenderSelectField } from "../../utlis/input";
import required from "./utils";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      prefix="$ "
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const Page2 = ({ name, loan_type, selectable_loan_type, ...props }) => {
  const classes = useStyles();

  const [purpose, setPurpose] = React.useState("");

  const [pageCopy, setPageCopy] = React.useState({});

  React.useEffect(() => {
    if (props.hasOwnProperty("appCopy"))
      setPageCopy(props.appCopy.application.page2);
  }, []);

  function handleChange(event) {
    setPurpose(event.target.value);
  }

  return (
    <Wizard.Page>
      {name === "" ? (
        <Typography variant="h1" align="center" className={classes.header}>
          {pageCopy.line2}
        </Typography>
      ) : (
        <Typography variant="h1" align="center" className={classes.header}>
          {pageCopy.line1} {name}
        </Typography>
      )}
      {selectable_loan_type && (
        <React.Fragment>
          <Field
            name="purpose"
            label="Loan Purpose"
            component={RenderSelectField}
            values={purpose}
            onChange={handleChange}
            validate={required}
          >
            {pageCopy.hasOwnProperty("loanPurpose") &&
              pageCopy.loanPurpose.map((loan, key) => (
                <MenuItem key={key} value={loan.value}>
                  {loan.option}
                </MenuItem>
              ))}
          </Field>
          <Error name="purpose" {...classes} />
        </React.Fragment>
      )}
      <Field
        name="amount"
        type="tel"
        component={RenderTextField}
        label="How much will it cost?"
        validate={required}
      />
      <Error name="amount" {...classes} />

      <Field
        name="amount"
        type="tel"
        component={RenderTextField}
        label="How much will it cost?"
        validate={required}
        InputProps={{
          inputComponent: NumberFormatCustom
        }}
      />
      <Error name="amount" {...classes} />
    </Wizard.Page>
  );
};

Error.propTypes = {
  name: PropTypes.string.isRequired
};

Page2.defaultProps = {
  name: "",
  loan_type: "",
  selectable_loan_type: true
};

Page2.propTypes = {
  appCopy: PropTypes.object.isRequired,
  name: PropTypes.string,
  loan_type: PropTypes.string,
  selectable_loan_type: PropTypes.bool
};

export default Page2;
