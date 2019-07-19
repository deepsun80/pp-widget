import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  ppWidget: {
    cursor: "pointer",
    display: "inline"
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
