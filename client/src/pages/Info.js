import { Button, Box, CardContent, IconButton, Grid} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";

function Board() {
  const navigate = useNavigate()
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
            <CardMedia
              width= "auto"
              component = "img"
              sx={{width: "25vw"}}
              image="https://news.ucsc.edu/2014/10/images/Slugpuppetgenome.jpg"
            />
          </Grid>
          <Divider />
          <Typography variant="h5" component={'div'}>
            Events Specification: 
            <Typography variant= "h6">
              This is an events for UCSC students
            </Typography>
          </ Typography>
        </CardContent>
      </Card>
    </Grid>
     
        <Button variant="contained" startIcon={<CalendarMonthIcon />}>
          Calendar
        </Button>
        
        <Button variant="contained" startIcon={<NotificationsActiveIcon />}>
          Notify Me
        </Button>
  </Box>
  </>
  );
}

export default Board;