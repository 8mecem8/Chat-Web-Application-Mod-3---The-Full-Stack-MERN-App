//import packages/libraries...
import React from 'react'


//import Styles...
import { MessagesBox,NoConversationText } from '../index.style'


//import Local files...
import AMessage from './Alt_AMessage'
import useMainStore from '../../../Stores/0__MainStore'
import useConversationStore from '../../../Stores/conversationStore'
import InputMessage from './InputMessage'



function MessageSection() {

  /*------------------------  App`s Main Store ------------------------*/
  let {user,setUser} = useMainStore((state) => {return state}) //get all properties from center State
  let {currentOtherUser,currentConversation,setConversation} = useConversationStore((state =>{ return state}))

  
  const ScreenCurrentConversation = user.allConversations.map((arg)=>{return arg.members.includes(currentOtherUser._id) ? arg : undefined})
  

  
  return (
    <>
      
        <MessagesBox>
        
                {
                  !ScreenCurrentConversation[0] 
                  ?
                    <NoConversationText>
                      Open a conversation to start a chat.
                    </NoConversationText>
                  :
                  <>
                    <div>
                        {ScreenCurrentConversation?.map((cnv)=>
                        {
                          return cnv?.messages?.map((message,i)=>
                          {
                          return <AMessage ByUser={message.sender == user._id ? user : currentOtherUser} owner={message.sender == user._id ? true : false} message={message} details={cnv} key={i}/>
                          }) 
                        })}
                    </div>
                    
                     <InputMessage />
                   
                  </>
                }
          
          <div>
            
          </div>
        </MessagesBox>
    </>
  )
}

export default MessageSection