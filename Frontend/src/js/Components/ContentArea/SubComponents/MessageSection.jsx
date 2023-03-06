//import packages/libraries...
import React, { useEffect, useRef } from 'react'


//import Styles...
import { MessagesBox,NoConversationText } from '../index.style'


//import Local files...
import AMessage from './Alt_AMessage'




function MessageSection({ScreenCurrentConversation,user,currentOtherUser}) {

  const scrollElement = useRef()

  

  
  return (
    <>
      
        <MessagesBox>
                  {/* if(isNewConversations) {return <InputMessage />}*/}
        
              {
                (ScreenCurrentConversation instanceof Array ? !ScreenCurrentConversation[0] : !ScreenCurrentConversation)//  && !isNewConversations
                  ?
                    <NoConversationText>
                      Open a conversation to start a chat.
                    </NoConversationText>
                  :
                    
                    ScreenCurrentConversation?.map((cnv)=>
                    {
                      
                        return cnv?.messages?.map((message,i)=>
                        {
                          return(
                            <div ref={scrollElement} key={i}>
                              <AMessage  ByUser={message.sender == user._id ? user : currentOtherUser} owner={message.sender == user._id ? true : false} message={message} details={cnv} />
                           </div>)
                        }) 
                    })
                    
              }
              {setTimeout(()=>scrollElement.current?.scrollIntoView({ behavior: "smooth", block: "end"}),200)}
              {/* scrollElement.current?.scrollTo(0,scrollElement.current.scrollHeight) */}
          <div>
            
          </div>
        </MessagesBox>
    </>
  )
}

export default MessageSection