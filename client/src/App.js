import Landing from "./Landing";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./Components/theme";

//
import { createStyles, Grid, makeStyles, Paper } 
    from '@mui/material';
import React from 'react';


function App() {
  return (  
  <ThemeProvider theme={themeOptions}>
    <Landing />
  </ThemeProvider>
  );
}

export default App;
