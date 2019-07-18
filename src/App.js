/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import getEntry from "../utlis/contentful";

const useStyles = makeStyles(theme => ({
  ppWidget: {
    cursor: "pointer",
    display: "inline"
  },
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    maxWidth: "90vw",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "3px 3px 10px #465155",
    padding: theme.spacing(2, 4, 4),
    outline: "none"
  }
}));

const App = ({ title }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [logoUrl, setLogoUrl] = React.useState(null);

  React.useEffect(async () => {
    const websiteInfo = await getEntry("generalSettings");
    setLogoUrl(websiteInfo.fields);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen} className={classes.ppWidget}>
        {title}
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="modal-title">PP-Widget</h2>
          <p id="simple-modal-description">Paypossible Modal</p>
        </div>
      </Modal>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
