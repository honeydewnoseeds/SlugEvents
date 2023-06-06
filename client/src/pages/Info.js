import { Stack, Button, Box, IconButton, Grid, CardMedia, useMediaQuery} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from "react-router-dom";
import * as React from 'react';

function Info() {
  const navigate = useNavigate();
  const location = useLocation();
  // dynamic theme 
  const theme = useTheme();
  // checks if the screen is small 
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  // Info page will initially look for image and description states to display data
  let imageSrc = location.state.imageSrc;
  let description = location.state.description;
  
  // handles different steps
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };    

  // steps variables
  const [activeStep, setActiveStep] = React.useState(0);
  // hard coding the slider into maximum 2
  const maxSteps = 2;

  // Hard coding the slider 
  // if current page = 0 : displays the image dynamically
  // if current page = 1 : displays the descriptions
  const slider = (current) => {
    if (current===0){
      return (   
        <CardMedia>
          <img class="vertical-center"
                src= {imageSrc}
                alt= "titlee"
                style={{
                  width: isSmallScreen ? "90%" : "50%",
                  maxHeight: "74vh", 
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
        // auto fit constraints
        minHeight="100vh"
        width="auto"
        height="auto"
        flexGrow={1}
        // setting the colors of the background
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.default",
        }}
      > 
        <Grid container justifyContent="flex-start">
          <IconButton onClick={() => navigate('/landing')}>
            <ArrowBackIcon />
          </ IconButton>
        </Grid>
        <Card variant="outlined" sx= {{
                                      border:"primary.main", 
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

export default Info;
