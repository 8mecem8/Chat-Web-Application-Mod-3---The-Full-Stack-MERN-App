//import packages/libraries...
import React, { useEffect, useRef, useState } from 'react'


//import Styles...
import { ContentAreaContainer } from './index.style'



//import Local files...
import InputMessage from './SubComponents/InputMessage'
import MessageSection from './SubComponents/MessageSection'
import useConversationStore from '../../Stores/conversationStore'
import '.././Router/index'
import useMainStore from '../../Stores/0__MainStore'



function ContentArea({socket,ScreenCurrentConversation,currentOtherUser}) {

  /*------------------------  App`s Main Store ------------------------*/
  let {user,setUser} = useMainStore((state) => {return state}) //get all properties from center State
  let {isNewConversations} = useConversationStore((state =>{ return state}))


console.log(ScreenCurrentConversation,'ScreenCurrentConversation ContentArea ContentArea')
  
  return (
    <>
      <ContentAreaContainer>
          <MessageSection  ScreenCurrentConversation={ScreenCurrentConversation} user={user} currentOtherUser={currentOtherUser} />

        { (ScreenCurrentConversation instanceof Array ? ScreenCurrentConversation[0] : ScreenCurrentConversation)
          ? 
            <InputMessage receiverId={currentOtherUser._id}  socket={socket}  sender={user._id} conID={ScreenCurrentConversation ? ScreenCurrentConversation[0]?._id : null} users={[user._id,currentOtherUser._id]} />
          :
          isNewConversations 

          ?

            <InputMessage receiverId={currentOtherUser._id}  socket={socket}  sender={user._id} conID={ScreenCurrentConversation ? ScreenCurrentConversation[0]?._id : null} users={[user._id,currentOtherUser._id]} />

          : ""
        }

      </ContentAreaContainer>
    </>
  )
}

export default ContentArea