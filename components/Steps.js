import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const Steps = ({ title, body }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={2} style={{ textAlign: "center" }}>
        <span className={clsx(classes.iconSpan, "fa-stack fa-lg")}>
          <Icon
            className={clsx(classes.spanIcon, "far fa-circle fa-stack-1x")}
            color="secondary"
          />
          <Icon
            className={clsx(classes.numIcon, "fa fa-stack-1x")}
            color="secondary"
          >
            {title}
          </Icon>
        </span>
      </Grid>
      <Grid item xs={10} className={classes.step}>
        <Typography variant="caption" color="primary">
          {body}
        </Typography>
      </Grid>
    </Grid>
  );
};

Steps.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Steps;
