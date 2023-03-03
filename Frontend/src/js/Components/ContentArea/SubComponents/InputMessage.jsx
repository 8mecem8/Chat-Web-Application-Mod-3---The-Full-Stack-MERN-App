//import packages/libraries...
import React from 'react'


//import Styles...
import { InputMessageContainer } from '../index.style'


//import Local files...

function InputMessage() {


  return (
    <InputMessageContainer>
                <input placeholder='Search a chat' style={{border:'2px purple solid',padding:'5px',width:'100%',fontFamily: 'var(--main-font) !important'}} type='text' />
    </InputMessageContainer>
  )
}

export default InputMessage