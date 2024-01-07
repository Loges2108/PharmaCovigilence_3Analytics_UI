import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#914298",
    },
    secondary: {
      main: "#ece7ee",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Inter-Regular",
    button: {
      textTransform: "none",
      fontWeight: 500,
      fontSize:20,
      textDecoration: "none",
      gap:5
    },
  },
});

export default theme;