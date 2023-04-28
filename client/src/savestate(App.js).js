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
    <div>
    <div className = "App">
    <div className = "btns">
      <button value = "All">All</button>
      <button value = "College 9/10">College 9/10</button>
      <button value = "Cowell Stevenson">Cowell Stevenson</button>
    </div>
  </div>
  <ThemeProvider theme={themeOptions}>
    <Landing />
  </ThemeProvider>
  </div>
  );
}

export default App;
