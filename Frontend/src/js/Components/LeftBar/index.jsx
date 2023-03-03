//import packages/libraries...
import React from 'react'



//import Styles...
import { LeftBarContainer, SearchContainer } from './index.style'
import { PTabs, PTabsItem, PText } from '@porsche-design-system/components-react';


//import Local files...
import SearchInBar from './SubComponents/SearchInBar';
import ListTabs from './SubComponents/ListTabs';


function LeftBar() {



  return (
    <>
        <LeftBarContainer>
            <SearchInBar />
            <ListTabs />

        </LeftBarContainer>
    </>
  )
}

export default LeftBar