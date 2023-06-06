import React, { Component } from 'react'
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

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password);
        fetch("http://localhost:8000/login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
                password, 
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data,"userRegister");
            if (data.status == "ok" ) {
                alert("login successful");
                window.localStorage.setItem("token", data.data);
                window.localStorage.setItem("loggedIn", true);
                window.location.href="./Landing";
                
            }
            else {
                alert("Incorrect Login try again");
            }
        });
    }
  render() {

    return (
        <div style={backStyle}>
            <Header />
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <h3>Sign In</h3>
                    </Grid>
                    <form onSubmit={this.handleSubmit} >
                        <TextField 
                            label='Email' 
                            placeholder='Enter Email'
                            type="email" fullWidth required
                            className="form-control"
                            onChange={(e) => this.setState({email: e.target.value })}/>
                        <TextField 
                            label='Password' 
                            placeholder='Enter password' 
                            type='password' fullWidth required
                            className="form-control"
                            onChange={(e) => this.setState({password: e.target.value })}
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Remember me"
                        />
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                        <Typography >
                            <Link href="./reset" >
                                Forgot password ?
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
        
        )
  }
}
        
      