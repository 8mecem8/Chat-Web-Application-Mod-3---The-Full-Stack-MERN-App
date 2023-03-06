//import packages/libraries...
import React, { useCallback, useEffect, useRef, useState } from 'react'
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
import useConversationStore from '../../Stores/conversationStore';


const socket = io(`${process.env.SERVER}`,{ transports: ["websocket"] });


function App() {



 const [newSocketMessage, setnewSocketMessage] = useState(null);

  /*------------------------  App`s Main Store ------------------------*/
  let {user,setUser} = useMainStore((state) => {return state}) //get all properties from center State
  let {setcurrentOtherUser,setallOnlineUser,setuserallconversations,currentOtherUser,isNewConversations} = useConversationStore((state =>{ return state}))

  
  /*------------------------ Check if user logged in ------------------------*/  //the logic is start app with app.jsx then check main state if we have user and check localstorage(YES it is a bad technique) if there is user !! if there is no user go to login page , if there is user but no avatar picture go to avatar selection page
  //useEffect(() => {let savedUser = localStorage.getItem("User");if(!savedUser || !user){navigate('/login')};if(user ? !user.avatarImage.hasAvatar : false){navigate("/avatar-select")}}, [])
  
  authSubComponent(user,setUser) //Check if user logged in 



  useEffect(() => {
    socket.on('welcome', (message) => {console.log(message,)}); //get welcome message

    socket.emit("addUser", user?._id); //sent user id to create online user list
    socket.on("getUsers", (users) => {setallOnlineUser(users)}); //get and set all online users
    socket.on('getMessage',(details)=>
    {
      console.log('getMessage',details);
      (async()=>{let response = await fetch(`${process.env.SERVER}/api/user/getUserInfo/${details.sender}`);let data = await response.json();setcurrentOtherUser(data)})();
      (async()=>{let response = await fetch(`${process.env.SERVER}/api/conversations/getAllUserConversations/${user?._id}`);
      let data = await response.json();
      setUser({...user,allConversations:data});
      console.log(data,"datadatadata") ;
      setnewSocketMessage({sender:details.sender,message:details.usermessage,updatedAt:Date.now()});
      setuserallconversations(data) })();
      
    })

    socket.on('disconnect', () => {console.log('disconnected')});
    return () => {socket.off('welcome');socket.off('disconnect');};
  }, [socket]);





    let ScreenCurrentConversation = user?.allConversations?.filter((arg)=>{return arg?.members?.includes(currentOtherUser?._id)})
    

    if(newSocketMessage)
    {
      (()=>
      {

        if(ScreenCurrentConversation[0]?.messages.some(element => element.text == newSocketMessage.message)){return}

        ScreenCurrentConversation[0]?.messages.push({text:newSocketMessage.message,sender:newSocketMessage.sender});
        let temp = [user._id,newSocketMessage.sender];
        let tempMessage = [...new Set(ScreenCurrentConversation[0]?.messages)]
        return ScreenCurrentConversation = [{members:[...new Set(temp)],messages: ScreenCurrentConversation[0]?.messages ? tempMessage : [{text:newSocketMessage.message,sender:newSocketMessage.sender}],updatedAt: newSocketMessage.updatedAt,_id:ScreenCurrentConversation[0]?._id}]
      
      })()
    
    }


    console.log(ScreenCurrentConversation,'ScreenCurrentConversation')



  return (
    <>
      <TopBar />
      <Container>
        <LeftBar />
        <ContentArea currentOtherUser={currentOtherUser} ScreenCurrentConversation={ScreenCurrentConversation}  socket={socket} />
      </Container>
    </>
  )
}

export default App