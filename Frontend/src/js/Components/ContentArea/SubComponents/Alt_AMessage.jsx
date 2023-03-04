//import packages/libraries...
import React from 'react'
import { format } from "timeago.js";




//import Styles...
import { AMessageContainer, AMessageImage, AMessageText, AMessageTime, AMessageTop } from '../index.style';



//import Local files...



function AMessage({details,message,ByUser,owner}) 
{

  //console.log(details,ByUser)

  return (
    <>
        <AMessageContainer whose={owner ? 'flex-end' : 'flex-start'} /*className={own ? "message own" : "message"}*/>
            <AMessageTop>
                <AMessageImage
                src={ByUser?.avatarImage?.image ?`data:image/svg+xml;base64,${ByUser?.avatarImage?.image}` : 'https://api.multiavatar.com/Binx Bond.svg'}
                alt="Profile Avatar"
                />
                <AMessageText>{message?.text}</AMessageText>
            </AMessageTop>
            <AMessageTime>{format(details.updatedAt)}</AMessageTime>
        </AMessageContainer>
    </>
  )
}

export default AMessage