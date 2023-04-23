import Landing from "./Landing";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./Components/theme";
function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
