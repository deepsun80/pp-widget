import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function pxToRem(value) {
  return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({
  values: {
    sm: 375,
    md: 823,
    lg: 1025,
    xl: 1200
  }
});

const theme = createMuiTheme({
  breakpoints,
  typography: {
    fontFamily: ["PT-Sans, sans-serif"],
    fontWeightBold: 300,
    typography: {
      fontSize: "14px",
      fontWeight: 300
    },
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#697c89",
      main: "#697c89",
      dark: "#465155",
      contrastText: "#fff"
    },
    secondary: {
      light: "#06d438",
      main: "#06d438",
      dark: "#059829",
      contrastText: "#fff"
    },
    background: {
      default: "#f8f8f8"
    }
  },
  overrides: {
    MuiFab: {
      extended: {
        padding: "0 25px"
      }
    },
    MuiInput: {
      underline: {
        "&:hover:not($disabled):before": {
          borderBottom: "2px solid #06d438"
        },
        "&:after": {
          borderBottom: "2px solid #06d438"
        }
      }
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderRadius: "30px"
      },
      root: {
        "&:hover:not($disabled):not($error) $notchedOutline": {
          borderColor: "#06d438"
        }
      }
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#06d438"
        }
      }
    },
    MuiTypography: {
      h1: {
        fontSize: pxToRem(28),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(40)
        }
      },
      h2: {
        fontSize: pxToRem(26),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(36)
        }
      },
      h3: {
        fontSize: pxToRem(24),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(32)
        }
      },
      h4: {
        fontSize: pxToRem(22),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(28)
        }
      },
      h5: {
        fontSize: pxToRem(20),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(24)
        }
      },
      h6: {
        fontSize: pxToRem(18)
      }
    }
  }
});

export default theme;
