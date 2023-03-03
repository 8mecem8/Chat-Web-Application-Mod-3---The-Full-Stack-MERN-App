import { styled } from '@linaria/react'
import React from 'react'

//import Styles
import Button from '@mui/material/Button';


const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  padding: 40px;
`







function SelectButtons({setformType,setulinput}) {
  return (
    
    <ButtonsDiv>

        <Button 
        size="large" 
        variant={"outlined"}
        label="Filled"
        color="primary"
        sx={{ flexGrow: 2, mr:"40px",mt:"10px",maxHeight:"100px"}}
        onClick={()=>{setformType("LOGIN"),setulinput({})}}
        >
        

        Login
        
        </Button>

        <Button 
        size="large" 
        variant={"outlined"}
        color="primary"
        sx={{ flexGrow: 2, mr:"40px",mt:"10px",maxHeight:"100px"}}
        onClick={()=>{setformType("REGISTER"),setulinput({})}}
        >
        

        Register
        
        </Button>

    </ButtonsDiv>

  )
}

export default SelectButtons