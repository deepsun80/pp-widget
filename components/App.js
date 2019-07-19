/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Fab from "@material-ui/core/Fab";
import Wizard from "./Wizard";
import { Page1, Page2 } from "./pages";
import Button from "./Button";
import useStyles from "./styles";
import Merchant from "../api";

const onSubmit = async values => {
  console.log(values);
};

const App = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [wizard, setWizard] = React.useState(1);
  const [error, setError] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getMerchant = async values => {
    try {
      const response = await Merchant.search(values.payId);
      setWizard(2);
    } catch (error) {
      setError("Please enter a valid Paypossible ID");
    }
  };

  return (
    <div>
      <div onClick={handleOpen} className={classes.ppWidget}>
        <Button />
      </div>
      <Dialog
        aria-labelledby="simple-dialog-title"
        aria-describedby="simple-dialog-description"
        open={open}
        className={classes.dialog}
        fullWidth
        maxWidth="md"
        scroll="body"
      >
        <div className={classes.dialogHeader}>
          <img
            alt="Paypossible Logo"
            title="Paypossible Logo"
            src={require("../utlis/payPossibleLogo.png")}
          />
          <button
            type="button"
            className={classes.close}
            data-dismiss="modal"
            onClick={() => handleClose()}
          >
            &times;
          </button>
        </div>
        <div className={classes.wizard}>
          {wizard === 1 && (
            <Wizard onSubmit={getMerchant} initWizard>
              <Page1 error={error} />
            </Wizard>
          )}
          {wizard === 2 && (
            <React.Fragment>
              <Wizard onSubmit={onSubmit}>
                <Page2 />
              </Wizard>
              <Fab
                variant="extended"
                size="small"
                aria-label="Submit"
                onClick={() => setWizard(1)}
              >
                Back
              </Fab>
            </React.Fragment>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default App;
