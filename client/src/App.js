import Info from "./info";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./theme";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
    <Info />
  </ThemeProvider>
  );
}

export default App;