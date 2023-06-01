import { Stack, Button, Box, CardContent, IconButton, Grid, CardMedia, useMediaQuery} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from "react-router-dom";
import * as React from 'react';

function Board() {
  const navigate = useNavigate()
  const location = useLocation();
  let imageSrc = location.state.imageSrc;
  let description = location.state.description;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };    

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 2;
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  const slider = (current) => {
    if (current===0){
      return (   
        <CardMedia>
          <img class="vertical-center"
                src= {imageSrc}
                alt= "titlee"
                style={{
                  width: isSmallScreen ? "90%" : "50%",
                  maxHeight: "74vh", // Set a fixed height for the images
                  objectFit: "contain",
                  borderRadius: "16px, 16px, 16px, 16px",
                }}
          />
          </CardMedia>
      );          
    }else{
        return( 
          <CardMedia>
            <Typography variant= "h6">
              {description}
            </Typography>
          </CardMedia>

        );    
    }
  }

  return (

    <div
    style={{
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      height: "100%",
    }}
  >

<Box
      minHeight="100vh"
      width="auto"
      height="auto"
   
      //auto fit constraints
      flexGrow={1}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
    >
    <Grid container justifyContent="flex-start">
      <IconButton onClick={() => navigate('/landing')}>
        <ArrowBackIcon />
      </ IconButton>
    </Grid>

    <Card variant="outlined" sx= {{border:"primary.main", 
                                   borderRadius: '16px',
                                   width: "80vw",
                                   height: "78vh",
                                   display: isSmallScreen ? "flex" : "",
                                   alignItems: "center",
                                   justifyContent: "center",
                                   p: 2 }}>
          {slider(activeStep)}
        </Card>
  
  
    <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />

     <Stack>
        <Button variant="contained" startIcon={<CalendarMonthIcon />}>
          Calendar
        </Button>
      </Stack>
  </Box>
  </div>
  );
};

export default Board;
