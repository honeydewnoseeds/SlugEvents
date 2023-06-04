
// // import React from 'react'
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// // import './App.css'
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// // import Login from './components/login.component'
// import SignUp from '../Components/SignUp';

// // const SignUpPage = () => {
// //   const handleSignUp = (formData) => {
// //     // Handle sign up logic here
// //     console.log(formData);
// //   };

// //   return (
// //     <div>
// //       <h1>Sign Up Page</h1>
// //       <SignUp onSignUp={handleSignUp} />
// //     </div>
// //   );
// // };


// import React from 'react'
// import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
// // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// const SignUpPage=()=>{

//     const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
//     const avatarStyle={backgroundColor:'#1bbd7e'}
//     const btnstyle={margin:'8px 0'}
//     return(
//         <Grid>
//             <Paper elevation={10} style={paperStyle}>
//                 <Grid align='center'>
//                      {/* <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> */}
//                     <h2>Sign In</h2>
//                 </Grid>
//                 <TextField label='Username' placeholder='Enter username' fullWidth required/>
//                 <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
//                 <FormControlLabel
//                     control={
//                     <Checkbox
//                         name="checkedB"
//                         color="primary"
//                     />
//                     }
//                     label="Remember me"
//                  />
//                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
//                 <Typography >
//                      <Link href="#" >
//                         Forgot password ?
//                 </Link>
//                 </Typography>
//                 <Typography > Do you have an account ?
//                      <Link href="#" >
//                         Sign Up 
//                 </Link>
//                 </Typography>
//             </Paper>
//         </Grid>
//     )
// }

// export default SignUpPage;