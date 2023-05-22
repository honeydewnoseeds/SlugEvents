import { Stack, Button, Box, CardContent, IconButton, Grid} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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

  const slider = (current) => {
    if (current===0){
      return (    
      <Grid container direction="column" alignItems="center" justify="center">
              <img
                src= {imageSrc}
                alt= "titlee"
                style={{
                  width: "70vw",
                  height: "73vh", // Set a fixed height for the images
                  objectFit: "cover",
                  borderRadius: "16px 16px 16px 16px",
                }}
            />
              </Grid>
              
      );          
    }else{
        return( 
          <Typography variant= "h6">
              {description}
          </Typography>
        );    
    }
  }

  return (
    <>
<Box
      height="100vh"
      width="100vw"
   
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

    <Grid container direction="column" alignItems="center" justify="center">
    <Card variant="outlined" sx= {{border:"primary.main", borderRadius: '16px', width: "80vw", height: "78vh"}}>
      <CardContent>
        {slider(activeStep)}
      </CardContent>
      </Card>
    </Grid>
  
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

     <Stack direction= "row" spacing={15}>
        <Button variant="contained" startIcon={<CalendarMonthIcon />}>
          Calendar
        </Button>
        
        <Button variant="contained" startIcon={<NotificationsActiveIcon />}>
          Notify Me
        </Button>
      </Stack>
  </Box>
  </>
  );
};

export default Board;
