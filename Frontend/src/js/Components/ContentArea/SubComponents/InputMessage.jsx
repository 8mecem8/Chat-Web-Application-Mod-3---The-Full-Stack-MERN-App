//import packages/libraries...
import React, { useState } from 'react'


//import Styles...
import { InputMessageContainer } from '../index.style'
import '../../Router/index'
import useMainStore from '../../../Stores/0__MainStore'

//import Local files...

function InputMessage({conID,sender,users,socket,receiverId}) {

  //console.log(conID,InputMessage)

  /*------------------------  App`s Main Store ------------------------*/
  let {user,setUser} = useMainStore((state) => {return state}) //get all properties from center State



  const [usermessage, setusermessage] = useState()
  
  let message = {"text":usermessage,"sender":sender}



  const handleKeyPress = e =>{if (e.key === "Enter") {handleMessage()}}



    const handleMessage= async ()=>
    {
        setusermessage("")
        console.log(conID,'conIDhandleMessage')

        socket.emit('sendMessage',{sender,receiverId,usermessage})

         const response = await fetch(`${process.env.SERVER}/api/conversations/createUpdateConversation`,
        {
          method: 'POST',body: JSON.stringify({conID,users,message}),headers:{'Content-type': 'application/json; charset=UTF-8',}
        })

        const data = await response.json() 

        console.log('responsedata from server',data)
        console.log('responsedata from server',user)
        console.log('responsedata from server',user.allConversations.map(arg => arg._id),data._id)
        if(data)
        {
          let newConArray = user.allConversations.some(arg => arg._id == data._id) ? user.allConversations.map(arg=>{ return (arg._id == data._id ? arg = data : '') }) : [...user.allConversations,data]

          console.log(newConArray,'new data array setuser')
          setUser({...user,allConversations:newConArray,History: user.History.includes(data._id) ? user.History : [...user.History,data._id] }) 
        }
    }

  return (
    <InputMessageContainer>
        <input value={usermessage} onKeyDown={handleKeyPress} onChange={(e)=>{setusermessage(e.target.value)}} placeholder='Write a Message'  type='text' />
        <button type="submit" disabled={!usermessage ? true : false} onClick={handleMessage}>Enter</button>
    </InputMessageContainer>
  )
}

export default InputMessage