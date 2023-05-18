import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from "./theme";


const font = createTheme({
    typography: {
      fontFamily: [
        'Mogra',
        'cursive',
      ].join(','),
    },
    palette: {
        type: "light",
        text: {
            primary: "#000000",
            secondary: "#c08497",
            white: "#ffffff",
          },
    },
  });

export default function ButtonAppBar() {
    return (
   
        <AppBar elevation={0} position="static" sx= {{backgroundColor:"background.default"}}>
          <Toolbar>
            <ThemeProvider theme={font}>
                <Typography align="left" variant="h5" color= "text.secondary" sx={{ flexGrow: 1}}>
                    SlugEvents
                </Typography>
            </ThemeProvider>
                <Button sx= {{backgroundColor: "primary.main"}}>
                    <ThemeProvider theme={themeOptions}>
                        <Typography variant= "h7" color="text.white">
                            Login
                        </Typography>
                    </ThemeProvider>
                </Button>
          </Toolbar>
        </AppBar>
      
    );
  }