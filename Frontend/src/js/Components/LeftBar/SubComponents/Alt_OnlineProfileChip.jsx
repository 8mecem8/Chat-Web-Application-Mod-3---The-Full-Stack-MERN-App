//import packages/libraries...
import React, { useState } from 'react'


//import Styles...
import { OnlineProfileChipBadge, OnlineProfileChipContainer, ProfileChipContainer, ProfileChipImage, ProfileChipUserName } from '../index.style';




//import Local files...


function OnlineProfileChip() 
{

    const [user, setUser] = useState(null);



  return (
    <>
        <ProfileChipContainer>
            <OnlineProfileChipContainer>
                <ProfileChipImage
                    src={
                    'https://api.multiavatar.com/Binx Bond.svg'
                    }
                    alt="Profile picture"
                />
                <OnlineProfileChipBadge></OnlineProfileChipBadge>
            </OnlineProfileChipContainer>
            <ProfileChipUserName>{user?.username}User Name</ProfileChipUserName>
        </ProfileChipContainer>
    </>
  )
}

export default OnlineProfileChip