import { createTheme } from "@mui/material/styles";
import { green, purple, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    white: {
      main: grey[500],
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: grey[900],
          color: "#fff",
        },
      },
    },
  },
});
export default theme;
