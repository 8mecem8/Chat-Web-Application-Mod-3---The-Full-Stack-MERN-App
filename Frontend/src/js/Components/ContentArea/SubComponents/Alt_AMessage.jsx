//import packages/libraries...
import React from 'react'
import { format } from "timeago.js";




//import Styles...
import { AMessageContainer, AMessageImage, AMessageText, AMessageTime, AMessageTop } from '../index.style';



//import Local files...



function AMessage({message,own=false}) {
  return (
    <>
        <AMessageContainer whose={own ? 'flex-end' : 'flex-start'} /*className={own ? "message own" : "message"}*/>
            <AMessageTop>
                <AMessageImage
                src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                />
                <AMessageText>{message?.text}This is a message coming from far far far far far far away coming throught internet</AMessageText>
            </AMessageTop>
            <AMessageTime>{format(message?.createdAt)} 18.30</AMessageTime>
        </AMessageContainer>
    </>
  )
}

export default AMessage