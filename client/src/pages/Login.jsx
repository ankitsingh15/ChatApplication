import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {CameraAlt as CameraAltIcon} from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyledComponent';
import {useInputValidation,useStrongPassword} from "6pp";
import { usernameValidator } from '../utils/validators';


function Login() {

  const [isLogin,setIsLogin]=useState(true);
  const name=useInputValidation("",usernameValidator);
  const bio=useInputValidation("",usernameValidator);
  const username=useInputValidation("",usernameValidator);
  const password=useStrongPassword();



  function toggleLogin(e){
    setIsLogin(!isLogin);
  }

  return (
    <Container component={"main"}  maxWidth="sm" sx={{display:"flex",alignItems:"center",flexDirection:"column",height:"100vh"}}>
      <Paper elevation={3}
      sx={{padding:4,display:"flex",flexDirection:"column" ,alignItems:"center"}}
      >
      {isLogin?(
        <>
          <Typography variant='h5' fullWidth>Login</Typography>
          <form style={{width:"100%",marginTop:"1rem"}}>
            <TextField 
            required
            fullWidth
            label="username"
            margin='normal'
            variant='outlined'
            value={username.value}
            onChange={username.changeHandler}
            />
            {
              username.error && (
                <Typography color="error" variant='caption'>
                  {username.error}
                </Typography>
              )
            }
            <TextField 
            required
            fullWidth
            type='password'
            label="password"
            margin='normal'
            variant='outlined'
            value={password.value}
            onChange={password.changeHandler}
            />
            {
              password.error && (
                <Typography color="error" variant='caption'>
                  {password.error}
                </Typography>
              )
            }
            <Button 
              variant='contained'
              color='primary'
              type='submit'
              fullWidth
            >LogIn</Button>
            <Typography marginTop={"1rem"} sx={{ textAlign: 'center' }} fullWidth>OR</Typography>
          <Button
          sx={{marginTop:"1rem"}}
          variant='text'
          fullWidth
          onClick={toggleLogin}
          >SIgn Up Instead</Button>
          
          </form>
        </>
      ):
      <>
          <Typography variant='h5' fullWidth>Sign Up</Typography>
          <form style={{width:"100%",marginTop:"1rem"}}>
            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
            <Avatar sx={{width:"10rem",height:"10rem",objectFit:"contain"}}/>
            <IconButton sx={{position:"absolute",bottom:0,right:0, bgcolor:'rgba(0,0,0,0.5)',":hover":'rgba(0,0,0,0.8)'}} component="label">
              <>
              <CameraAltIcon />
              <VisuallyHiddenInput type='file'/>
              </>
            </IconButton>
            </Stack>
          <TextField 
            required
            fullWidth
            label="name"
            margin='normal'
            variant='outlined'
            />
             <TextField 
            required
            fullWidth
            label="Bio"
            margin='normal'
            variant='outlined'
            />
            <TextField 
            required
            fullWidth
            label="username"
            margin='normal'
            variant='outlined'
            value={username.value}
            onChange={username.changeHandler}
            />
            {
              username.error && (
                <Typography color="error" variant='caption'>
                  {username.error}
                </Typography>
              )
            }
            <TextField 
            required
            fullWidth
            type='password'
            label="password"
            margin='normal'
            variant='outlined'
            value={password.value}
            onChange={password.changeHandler}
            />
            {
              password.error && (
                <Typography color="error" marginTop={'0px'} variant='caption'>
                  {password.error}
                </Typography>
              )
            }
            <Button 
              variant='contained'
              color='primary'
              type='submit'
              fullWidth
            >SignUp</Button>
            <Typography marginTop={"1rem"} sx={{ textAlign: 'center' }} fullWidth>OR</Typography>
          <Button
          sx={{marginTop:"1rem"}}
          variant='text'
          fullWidth
          onClick={toggleLogin}
          >Log In Instead</Button>
          
          </form>
        </>
      }
      
      </Paper>

    </Container>
  )
}

export default Login
