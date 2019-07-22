import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  ppWidget: {
    cursor: "pointer",
    display: "inline"
  },
  backButton: {
    backgroundColor: "transparent",
    color: theme.palette.secondary.light,
    border: `2px solid ${theme.palette.secondary.light}`,
    padding: "0 30px",
    height: 30,
    fontSize: "0.8em",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "#fff"
    }
  },
  dialog: {
    backgroundColor: theme.palette.background.paper
  },
  dialogHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 10px 0px 30px"
  },
  close: {
    color: theme.palette.primary.dark,
    fontSize: 30,
    backgroundColor: theme.palette.background.paper,
    border: "none",
    cursor: "pointer",
    "&:focus": {
      outline: 0
    },
    "&:hover": {
      color: theme.palette.primary.light
    }
  },
  wizard: {
    padding: "20px",
    maxWidth: "500px",
    margin: "auto"
  }
}));

export default useStyles;
