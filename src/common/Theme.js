import { createMuiTheme } from "@material-ui/core";

export const DarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default:"#111111"
    }
  },
  typography:{
    fontFamily:"Open Sans, Patrick Hand"
  },
});

export const LightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default:"#CCCCCC"
    },
  },
  typography:{
    fontFamily:"Open Sans, Patrick Hand",
  },
});