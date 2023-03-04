//import packages/libraries...
import React, { useState } from 'react'


//import Styles...
import { InputMessageContainer } from '../index.style'


//import Local files...

function InputMessage() {

    const [message, setmessage] = useState()



    const handleMessage=()=>
    {

    }

  return (
    <InputMessageContainer>
        <input onChange={(e)=>{setmessage(e.target.value)}} placeholder='Write a Message' style={{border:'2px purple solid',padding:'5px',width:'100%',fontFamily: 'var(--main-font) !important'}} type='text' />
        <button type="submit" onClick={handleMessage}>Enter</button>
    </InputMessageContainer>
  )
}

export default InputMessage