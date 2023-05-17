import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#F7AF9D",
    },
    secondary: {
      main: "#F3EEC3",
    },
    background: {
      default: "#f7e3af",
      paper: "#f3eec3",
    },
    text: {
      primary: "#000000",
      secondary: "#c08497",
      white: "#ffffff",
    },
  },
});
