//import Packages/libaries...
import React, { useState,useContext } from 'react'
import { styled } from '@linaria/react'
import { useNavigate } from "react-router-dom";

//import local components/functions...
import { createNewUser, loginOUser } from '../../../Utility/AuthFunctions';
import useMainStore from '../../../Stores/0__MainStore';


//import Styles
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';


const FormsDiv = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  padding: 40px;
`
const Fdform = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-width: 400px;
  


  @media (max-width: 700px)
  {
    min-width: unset;
    max-height: unset;
  }
`





function AuthForms({setulinput,ulinput,formType}) {

  let { setUser } = useMainStore(state => state);


  const navigate = useNavigate();

  const [lLoading,setlLoading] = useState(false)

  /* Password input state and show function  */
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  /* Password input state and show function  */




  const RegisterSubmit = async(e)=>
  {
    e.preventDefault()
  
    setlLoading(true)

      let registeredUserReponse = await createNewUser({email:ulinput.email,password:ulinput.password,name:ulinput.name})
      let registeredUser = await registeredUserReponse.json()
      console.log(registeredUser,'registeredUser')

      if(registeredUser){setUser(registeredUser)}

    setlLoading(false)

    if(registeredUser){navigate("/avatar-select");}
  }



  const LoginSubmit = async(e)=>
  {
    e.preventDefault()
    
    setlLoading(true)

      let loggedinUserResponse = await loginOUser({email:ulinput.email,password:ulinput.password})
      let loggedinUser = await loggedinUserResponse.json()

      setUser(loggedinUser.passport.user)
    

    setlLoading(false)
      navigate("/");
  
  }



  return (

    <FormsDiv>


    {
        formType == "LOGIN" ?


            <Fdform onSubmit={LoginSubmit}>
                <TextField
                label="E-mail Address"
                value={ulinput.email ? ulinput.email : ""}
                name="E-mail"
                onChange={(e)=>{setulinput({...ulinput,email:e.target.value})}}
                sx={{ mb:"10px" }}
                autoComplete='true'
                fullWidth
                />

                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                  autoComplete='true'
                  label="Password"
                  name='Password'
                  id="outlined-adornment-password"
                  value={ulinput.password ? ulinput.password : ""}
                  onChange={(e)=>{setulinput({...ulinput,password:e.target.value})}}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                            
                            
                          />
              </FormControl>

              <Button 
              size="small" 
              variant={"outlined"}
              color="primary"
              /*disabled={password.length < 6 || !email}*/
              type="submit"
              sx={{ mr:"40px",mt:"10px",maxWidth:"100px"}}>

              {lLoading ? <CircularProgress size={35} /> : 'Login'}
              
              </Button>





            </Fdform>


            :


            <Fdform onSubmit={RegisterSubmit}>
                <TextField
                label="E-mail Address"
                value={ulinput.email ? ulinput.email : ""}
                name="E-mail"
                onChange={(e)=>{setulinput({...ulinput,email:e.target.value})}}
                sx={{ mb:"10px" }}
                autoComplete='true'
                fullWidth
              />

                <TextField
                label="Name"
                value={ulinput.name ? ulinput.name : ""}
                name="Name"
                onChange={(e)=>{setulinput({...ulinput,name:e.target.value})}}
                sx={{ mb:"10px" }}
                autoComplete='true'
                fullWidth
                />


                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                  autoComplete='true'
                  label="Password"
                  name='Password'
                  id="outlined-adornment-password"
                  sx={{ mb:"10px" }}
                  value={ulinput.password ? ulinput.password : ""}
                  onChange={(e)=>{setulinput({...ulinput,password:e.target.value})}}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                fullWidth
                          />
                </FormControl>


                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <OutlinedInput
                  autoComplete='true'
                  label="Confirm Password"
                  name='Confirm Password'
                  id="outlined-adornment-password"
                  sx={{ mb:"10px" }}
                  value={ulinput.conpassword ? ulinput.conpassword : ""}
                  onChange={(e)=>{setulinput({...ulinput,conpassword:e.target.value})}}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                fullWidth
                          />
                </FormControl>

              

                <Button 
                size="small" 
                variant={"outlined"}
                color="primary"
                disabled={ulinput.password !== ulinput.conpassword}
                type="submit"
                sx={{mr:"40px", mt:"10px",maxWidth:"100px"}}>

                {lLoading ? <CircularProgress size={35} /> : 'REGISTER'}
                
                </Button>
            </Fdform>

      }

    </FormsDiv>    




  )
}

export default AuthForms