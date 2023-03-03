//import packages/libraries...
import React, { useState } from 'react'


//import Styles...
import { ProfileChipContainer, ProfileChipImage, ProfileChipUserName } from '../index.style';




//import Local files...


function ProfileChip() 
{

    const [user, setUser] = useState(null);



  return (
    <>
        <ProfileChipContainer>
            <ProfileChipImage
                src={
                    'https://api.multiavatar.com/Binx Bond.svg'
                }
                alt="Profile picture"
            />
            <ProfileChipUserName>{user?.username}User Name</ProfileChipUserName>
        </ProfileChipContainer>
    </>
  )
}

export default ProfileChip