import React from 'react'


import { SearchContainer } from '../index.style'



function SearchInBar() {


  return (
    <SearchContainer>
                <input placeholder='Search a chat' style={{border:'2px purple solid',padding:'5px',width:'100%',fontFamily: 'var(--main-font) !important'}} type='text' />
    </SearchContainer>
  )
}

export default SearchInBar