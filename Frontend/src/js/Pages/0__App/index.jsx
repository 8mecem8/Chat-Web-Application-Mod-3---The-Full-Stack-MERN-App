//import packages/libraries...
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import {io} from 'socket.io-client';

//import Styles...
import { Container,} from './index.style'


//import Local files...
import useMainStore from '../../Stores/0__MainStore'
import '../../Components/Router/index' //need to call router/index.js file to recall changes in the main state to pass all components
import authSubComponent from '../../Components/authSubComponent';
import LeftBar from '../../Components/LeftBar';
import TopBar from '../../Components/TopBar';
import ContentArea from '../../Components/ContentArea';


const socket = io(`${process.env.SERVER}`,{ transports: ["websocket"] });


function App({user,setUser}) {

  const navigate = useNavigate();

  
  /*------------------------  App`s Main Store ------------------------*/
  //let {user,setUser} = useMainStore((state) => {return state}) //get all properties from center State


  /*------------------------ Check if user logged in ------------------------*/  //the logic is start app with app.jsx then check main state if we have user and check localstorage(YES it is a bad technique) if there is user !! if there is no user go to login page , if there is user but no avatar picture go to avatar selection page
  //useEffect(() => {let savedUser = localStorage.getItem("User");if(!savedUser || !user){navigate('/login')};if(user ? !user.avatarImage.hasAvatar : false){navigate("/avatar-select")}}, [])
  
  authSubComponent(user,setUser) //Check if user logged in 









  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on('welcome', (message) => {console.log(message,)});

    socket.on('disconnect', () => {console.log('disconnected')});

    socket.on('pong', () => {setLastPong(new Date().toISOString());});

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);









  return (
    <>
      <Container>
        <TopBar />
        <LeftBar />
        <ContentArea />
      
      </Container>
      
    
    </>
  )
}

export default App