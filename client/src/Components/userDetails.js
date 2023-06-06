import React, { Component } from "react";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Header from "./header";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
const avatarStyle={backgroundColor:'#1bbd7e'}
const btnstyle={margin:'8px 0'}
const backStyle = {
    display: 'flex center',
    backgroundColor: '#f7e3af',
    height: '100vh', // Adjust the height as needed
    align: 'center'
  };
const backButtonStyle = {
    alignSelf: 'flex-start',
    margin: '10px',
  };


export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
        };
    }

    componentDidMount(){
        fetch("http://localhost:8000/userDetails",{
                method:"POST",
                crossDomain:true,
                headers:{
                    "Content-Type":"application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin":"*",
                },
                body:JSON.stringify({
                    token: window.localStorage.getItem("token"),
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data,"userData");
                this.setState({userData: data.data});
                if(data.data=="token expired") {
                    alert ("token expired login again");
                    window.localStorage.clear();
                    window.location.href = "./login";


                }
            });
    }
    logOut =()=>{
        window.localStorage.clear();
        window.location.href = "./login";
    }
    handleGoBack = () => {
        window.location.href = './landing';
      };
    render() {
        return(
            <div style={backStyle}>
                <Header/>
                <Button
                    style={backButtonStyle}
                    onClick={this.handleGoBack}
                    >
                    <ArrowBackIcon />
                </Button>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Typography > <h3>Name:</h3> {this.state.userData.fname}
                        </Typography>
                        <Typography > <h3>Email:</h3> {this.state.userData.email}
                        </Typography>
                        <Button onClick={this.logOut} type='logout' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Out</Button>
                    </Paper>
                </Grid>
                <br />
            </div>

            
        )
    }
}