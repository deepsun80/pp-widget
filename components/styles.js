import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  ppWidget: {
    cursor: "pointer",
    display: "inline"
  },
  logo: {
    paddingLeft: 20,
    paddingTop: 10
  },
  load: {
    marginTop: "50%",
    marginLeft: "40%"
  },
  backButton: {
    backgroundColor: "transparent",
    color: theme.palette.secondary.light,
    border: `2px solid ${theme.palette.secondary.light}`,
    padding: "0 30px",
    marginTop: 30,
    height: 30,
    fontSize: "0.8em",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "#fff"
    }
  },
  wizard: {
    padding: "20px",
    maxWidth: "500px",
    margin: "auto"
  },
  stepsSection: {
    marginBottom: 10,
    marginTop: 30
  },
  numIcon: {
    fontSize: 16,
    paddingBottom: 30
  },
  spanIcon: {
    fontSize: 32,
    paddingBottom: 40
  },
  step: {
    paddingTop: 10
  }
}));

export default useStyles;
