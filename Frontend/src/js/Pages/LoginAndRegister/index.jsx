//import Packages/libaries...
import React, { useEffect, useState } from 'react'
import {styled} from '@linaria/react';
import { useNavigate } from "react-router-dom";

//import local components/functions...
import SelectButtons from './subComponents/SelectButtons';
import AuthForms from './subComponents/AuthForms';
import backgroundVideo from '../../../assets/lrvideo.mp4'



//import Styles...
import { InputCover,LrContainer,BgVideo,HeadCover,Bgcover } from './index.styles';
import authSubComponent from '../../Components/authSubComponent';
import LogoLogin from "../../../assets/LogoLogin.png"






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

          <Bgcover>
            <BgVideo autoPlay loop muted><source src={backgroundVideo} type="video/mp4" /> </BgVideo>
            
            <LrContainer>
                <HeadCover>
                  <img src={LogoLogin} width="200px" alt='loging screen Logo'/>
                  <h2>Chat-Pal</h2>
                  <h3>Chat with your best friends in <span>Privacy</span></h3>
                </HeadCover>
                <InputCover>
                  <SelectButtons setformType={setformType} setulinput={setulinput} />
                  <AuthForms setulinput={setulinput} ulinput={ulinput} formType={formType} />
                </InputCover>
            </LrContainer>
          </Bgcover>  
          </>
        )
}

export default LoginVregister