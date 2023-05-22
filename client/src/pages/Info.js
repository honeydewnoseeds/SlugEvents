import { Stack, Button, Box, CardContent, IconButton, Grid} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useLocation, useNavigate } from "react-router-dom";


function Board() {
  const navigate = useNavigate()
  const location = useLocation();
  let imageSrc = location.state.imageSrc;
  let description = location.state.description;

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
          <Grid container direction="column" alignItems="center" justify="center">
          <img
            src= {imageSrc}
            alt= "titlee"
            style={{
              width: "30%",
              height: "100%", // Set a fixed height for the images
              objectFit: "cover",
              borderRadius: "16px 16px 16px 16px",
            }}
        />
          </Grid>
          <Divider />
          <Typography variant="h5" component={'div'}>
            Events Specification: 
            <Typography variant= "h6">
              {description}
            </Typography>
          </ Typography>
        </CardContent>
      </Card>
    </Grid>
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
