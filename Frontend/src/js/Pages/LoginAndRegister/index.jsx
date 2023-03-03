//import Packages/libaries...
import React, { useEffect, useState } from 'react'
import {styled} from '@linaria/react';
import { useNavigate } from "react-router-dom";

//import local components/functions...
import SelectButtons from './subComponents/SelectButtons';
import AuthForms from './subComponents/AuthForms';
import backgroundVideo from '../../../assets/lrvideo.mp4'



//import Styles...
import { InputCover, LrContainer } from './index.styles';
import authSubComponent from '../../Components/authSubComponent';



const BgVideo = styled.video`
  position: fixed;
  top: 0;
  height: 100%;
  transform: translate(-50%, 10px);
  left: 50%;
  border-radius: 25px;
  z-index: -1;
  opacity: 0.8;
  filter: sepia(1);
  

  
`








function LoginVregister({user,setUser}) 
{
  const navigate = useNavigate();
 
  /*------------------------ Check if user logged in ------------------------*/  //the logic is start app with app.jsx then check main state if we have user and check localstorage(YES it is a bad technique) if there is user !! if there is no user go to login page , if there is user but no avatar picture go to avatar selection page
  //useEffect(() => {let savedUser = localStorage.getItem("User");if(!savedUser || !user){navigate('/login')};if(user ? !user.avatarImage.hasAvatar : false){navigate("/avatar-select")}}, [])
    
    authSubComponent(user,setUser) //Check if user logged in 
    
    

  

  const [formType,setformType] = useState("LOGIN")
  const [ulinput,setulinput] = useState({})
  

  

  
 

  return (
          <>
            <BgVideo autoPlay loop muted><source src={backgroundVideo} type="video/mp4" /> </BgVideo>
            
            <LrContainer>
                <InputCover>
                  <SelectButtons setformType={setformType} setulinput={setulinput} />
                  <AuthForms setulinput={setulinput} ulinput={ulinput} formType={formType} />
                </InputCover>
            </LrContainer>
            
          </>
        )
}

export default LoginVregister