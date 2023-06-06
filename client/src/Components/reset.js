import React, { Component } from "react";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Header from "./header";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
const avatarStyle={backgroundColor:'#1bbd7e'}
const btnstyle={margin:'8px 0'}
const backStyle = {
    display: 'flex center',
    backgroundColor: '#f7e3af',
    height: '100vh', // Adjust the height as needed
    align: 'center'
  };

export default class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        const { email } = this.state;
        console.log(email);
        fetch("http://localhost:8000/forgot-password",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                email, 
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status == "success" ) {
                alert(data.status);
                window.location.href="./login";
            }
            
          
        });
    }
    

  render() {
    return(
        <div style={backStyle}>
            <Header/>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <h3>Forgot Password</h3>
                    </Grid>
                    <form onSubmit={this.handleSubmit}>
                    <TextField 
                            label='Email Adress' 
                            placeholder='Enter Email'
                            type="email" fullWidth required
                            className="form-control"
                            onChange={(e) => this.setState({email: e.target.value })}/>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
                    <Typography >
                            <Link href="./Login" >
                                Sign In
                        </Link>
                        </Typography>
                    <Typography > Don't have an account ?
                            <Link href="./SignUp" >
                                Sign Up 
                        </Link>
                        </Typography>
                        
                

                    </form>
                </Paper>
            </Grid> 


        </div>
        

    );
  }
    
}