import { createTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FAFAFA",
    },
    secondary: {
      main: "rgb(38, 38, 38)",
    },
    text: {
      primary: "#262626",
      secondary: "#8e8e8e",
      hint: "#0095f6",
      disabled: "#C7C9D9",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FAFAFA",
      paper: "rgb(38, 38, 38)",
    },
  },
});

export default theme;
