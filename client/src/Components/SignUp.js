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

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname:"",
            lname:"",
            email:"",
            password:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const { fname,lname, email, password } = this.state;
        console.log(fname, lname, email, password);
        fetch("http://localhost:8000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                fname,
                lname,
                email,
                password,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data,"userRegister");
            if (data.status == "ok") {
                window.location.href = "http://localhost:3000/login";
                
              }
              else {
                console.log("Did not verify");
              }
        });
    }
  render() {
    return (
      <div style={backStyle}> 
      <Header/>
      <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <h3>Create an Account</h3>
        </Grid>
        <br/><br/>
        <form onSubmit= {this.handleSubmit}>
            <TextField

                placeholder='First Name'
                type="First Name" fullWidth required
                className="form-control"
                onChange={(e) => this.setState({fname: e.target.value })}/>
              <TextField 
                  placeholder='Last Name'
                  type="Last Name" fullWidth required
                  className="form-control"
                  onChange={(e) => this.setState({lname: e.target.value })}/>
              <TextField 
                  placeholder='email'
                  type="Email" fullWidth required
                  className="form-control"
                  onChange={(e) => this.setState({email: e.target.value })}/>
              <TextField 
                  placeholder='password'
                  type="password" fullWidth required
                  className="form-control"
                  onChange={(e) => this.setState({password: e.target.value })}/>
              <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign up</Button>
              <Typography > Already have an account ?
                            <Link href="./Login" >
                                Sign in 
                        </Link>
                        </Typography>
          </form>
      </Paper>
      </Grid>
      </div>
    )
  }
}