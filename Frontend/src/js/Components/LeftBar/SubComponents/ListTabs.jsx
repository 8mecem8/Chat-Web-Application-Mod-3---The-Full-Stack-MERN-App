//import packages/libraries...
import React from 'react'


//import Styles...
import { PTabs, PTabsItem, PText } from '@porsche-design-system/components-react'
import { ListabsContainer } from '../index.style'



//import Local files...
import ProfileChip from './Alt_ProfileChip'
import OnlineProfileChip from './Alt_OnlineProfileChip'



function ListTabs() {

  return (
    <>
        <ListabsContainer>
            <PTabs>
                <PTabsItem label="Online Users">
                    <OnlineProfileChip />
                </PTabsItem>
                <PTabsItem label="Messages">
                    <ProfileChip />
                </PTabsItem>
            </PTabs>
        </ListabsContainer>
    </>
  )
}

export default ListTabs