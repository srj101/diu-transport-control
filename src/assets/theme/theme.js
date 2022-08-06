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
          background:
            "linear-gradient(90deg, rgba(19,7,1,1) 0%, rgba(73,27,4,1) 77%, rgba(196,152,11,1) 100%)",
          color: "#fff",
        },
      },
    },
  },
});
export default theme;
