import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  header: {
    color: theme.palette.primary.dark,
    marginBottom: 30
  },
  disclaimer: {
    color: theme.palette.primary.dark,
    marginTop: -20,
    marginBottom: 30
  },
  error: {
    marginTop: -20,
    marginBottom: 20
  }
}));

export default useStyles;
