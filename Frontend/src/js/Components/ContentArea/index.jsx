//import packages/libraries...
import React from 'react'


//import Styles...
import { ContentAreaContainer } from './index.style'



//import Local files...
import InputMessage from './SubComponents/InputMessage'
import MessageSection from './SubComponents/MessageSection'



function ContentArea() {
  return (
    <>
      <ContentAreaContainer>
          <MessageSection />
          
      </ContentAreaContainer>
    </>
  )
}

export default ContentArea