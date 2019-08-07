import React from "react";
import { loadCSS } from "fg-loadcss";
import Fab from "@material-ui/core/Fab";
import CircularProgress from "@material-ui/core/CircularProgress";
import Wizard from "./Wizard";
import Steps from "./Steps";
import { Page1, Page2 } from "./pages";
import useStyles from "./styles";
import Merchant from "../api";
import getEntry from "../utlis/contentful";
import overlay from "../utlis/overlay";

const App = () => {
  const classes = useStyles();

  const [wizard, setWizard] = React.useState(1);
  const [error, setError] = React.useState("");
  const [content, setContent] = React.useState({
    logo: null,
    copy: {},
    isLoaded: false
  });
  const [merchant, setMerchant] = React.useState({});

  React.useEffect(() => {
    async function fetchContentfulEntry() {
      const websiteInfo = await getEntry("generalSettings");
      const customerInfo = await getEntry("customer");
      setContent({
        logo: websiteInfo.fields.logoSmall.fields.file.url,
        copy: customerInfo.fields,
        isLoaded: true
      });
    }
    window.xprops.backGroundOverlayOn(overlay.style, overlay.text);
    window.xprops.clearData();
    window.addEventListener("beforeunload", event => {
      event.preventDefault();
      return window.xprops.backGroundOverlayOff();
    });
    loadCSS(
      "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
      document.querySelector("#font-awesome-css")
    );
    fetchContentfulEntry();
  }, []);

  const getMerchant = async values => {
    if (Object.getOwnPropertyNames(values).length === 0) {
      setWizard(2);
      setMerchant({});
    } else {
      try {
        const response = await Merchant.search(values.payId);
        setMerchant(response);
        setWizard(2);
      } catch (error) {
        setError(content.copy.appCopy.application.page1.error);
      }
    }
  };

  const onSubmit = async values => {
    let concatValues = {};
    if (Object.getOwnPropertyNames(merchant).length !== 0) {
      concatValues = {
        merchant: {
          url: merchant.url
        },
        ...values
      };
    } else concatValues = values;
    console.log(concatValues);
    await window.xprops.displayChildData(values);
    await window.xprops.backGroundOverlayOff();
    window.close("ppwidget-component");
  };

  return (
    <React.Fragment>
      {!content.isLoaded && (
        <CircularProgress
          size={70}
          color="secondary"
          className={classes.load}
        />
      )}
      {content.isLoaded && (
        <React.Fragment>
          <img
            alt="Paypossible Logo"
            title="Paypossible Logo"
            src={content.logo}
            className={classes.logo}
          />
          <div className={classes.wizard}>
            {wizard === 1 && (
              <React.Fragment>
                <Wizard
                  onSubmit={getMerchant}
                  initWizard
                  initialValues={{ payId: window.xprops.preFillId }}
                >
                  <Page1 error={error} {...content.copy} />
                </Wizard>
                <div className={classes.stepsSection}>
                  {content.copy.appCopy.application.page1.steps.map(
                    (col, key) => (
                      <Steps {...col} key={key} />
                    )
                  )}
                </div>
              </React.Fragment>
            )}
            {wizard === 2 && (
              <React.Fragment>
                <Wizard
                  onSubmit={onSubmit}
                  initialValues={{ purpose: merchant.loan_type }}
                >
                  <Page2 {...merchant} {...content.copy} />
                </Wizard>
                <Fab
                  className={classes.backButton}
                  variant="extended"
                  aria-label="Submit"
                  onClick={() => setWizard(1)}
                >
                  Back
                </Fab>
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
