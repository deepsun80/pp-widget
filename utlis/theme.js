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
      paper: "#f8f8f8"
    }
  },
  overrides: {
    MuiFab: {
      extended: {
        padding: "0 55px"
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
    MuiInputLabel: {
      outlined: {
        backgroundColor: "#fff"
      }
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent"
        }
      }
    },
    MuiTypography: {
      h1: {
        fontSize: pxToRem(23)
      },
      h2: {
        fontSize: pxToRem(20)
      },
      h3: {
        fontSize: pxToRem(18)
      },
      h4: {
        fontSize: pxToRem(16)
      },
      h5: {
        fontSize: pxToRem(14)
      },
      h6: {
        fontSize: pxToRem(14)
      }
    }
  }
});

export default theme;
