import React from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import { Form } from "react-final-form";

const styles = {
  backButton: {
    background: "transparent",
    color: "#06d438",
    border: "2px solid #06d438",
    padding: "0 30px",
    display: "block"
  },
  nextButton: {
    display: "block",
    margin: "30px auto"
  }
};

class Wizard extends React.Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {}
    };
  }

  next = values => {
    const { children } = this.props;
    this.setState(state => ({
      page: Math.min(state.page + 1, children.length - 1),
      values
    }));
  };

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  validate = values => {
    const { children } = this.props;
    const { page } = this.state;
    const activePage = React.Children.toArray(children)[page];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = values => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    }
    return this.next(values);
  };

  render() {
    const { children, initWizard } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            {!isLastPage && (
              <Fab
                variant="extended"
                aria-label="Submit"
                color="secondary"
                type="submit"
                style={styles.nextButton}
              >
                Next
              </Fab>
            )}
            {isLastPage && !initWizard && (
              <Fab
                variant="extended"
                aria-label="Submit"
                color="secondary"
                type="submit"
                disabled={submitting}
                style={styles.nextButton}
              >
                Submit
              </Fab>
            )}
            {isLastPage && initWizard && (
              <Fab
                variant="extended"
                aria-label="Submit"
                color="secondary"
                type="submit"
                disabled={submitting}
                style={styles.nextButton}
              >
                Next
              </Fab>
            )}
            {page > 0 && (
              <Fab
                variant="extended"
                size="small"
                aria-label="Submit"
                onClick={this.previous}
                style={styles.backButton}
              >
                Back
              </Fab>
            )}
          </form>
        )}
      </Form>
    );
  }
}

Wizard.defaultProps = {
  initialValues: {},
  initWizard: false
};

Wizard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.any,
  children: PropTypes.any.isRequired,
  initWizard: PropTypes.bool
};

export default Wizard;
