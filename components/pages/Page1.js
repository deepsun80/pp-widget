import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import { RenderTextField } from "../../utlis/input";
import Wizard from "../Wizard";
import useStyles from "./styles";

const Page1 = ({ error, ...copy }) => {
  const classes = useStyles();

  const [pageCopy, setPageCopy] = React.useState({});

  React.useEffect(() => {
    if (copy.hasOwnProperty("appCopy"))
      setPageCopy(copy.appCopy.application.page1);
  }, []);

  return (
    <Wizard.Page>
      <Typography variant="h1" align="center" className={classes.header}>
        {pageCopy.line1}
      </Typography>
      <Typography variant="body1" align="center" className={classes.header}>
        {pageCopy.line2}
      </Typography>
      <Field
        name="payId"
        type="text"
        component={RenderTextField}
        label="PayPossible ID"
      />
      <Typography
        variant="body2"
        align="center"
        display="block"
        className={classes.disclaimer}
      >
        {pageCopy.line3}
      </Typography>
      {error && (
        <Typography
          variant="caption"
          color="error"
          align="center"
          display="block"
          className={classes.error}
        >
          {error}
        </Typography>
      )}
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
