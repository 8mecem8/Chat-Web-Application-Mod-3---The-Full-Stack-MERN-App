//import packages/libraries...
import React, { useEffect, useState } from 'react'


//import Styles...
import { OnlineProfileChipBadge, OnlineProfileChipContainer, ProfileChipContainer, ProfileChipImage, ProfileChipUserName } from '../index.style';


//import Local files...
import useConversationStore from '../../../Stores/conversationStore';


function OnlineProfileChip({userDetails}) 
{

    /*------------------------  App`s Main Store ------------------------*/
    let {setisNewConversations,setcurrentOtherUser} = useConversationStore((state =>{ return state}))

    const [selectedUser, setselectedUser] = useState(null);

    useEffect(() => {(async()=>{let response = await fetch(`${process.env.SERVER}/api/user/getUserInfo/${userDetails.userId}`);let data = await response.json();setselectedUser(data)})()}, [])
    




    const handleClickOnlineUsers = ()=>
    {
        setisNewConversations(true)
        setcurrentOtherUser(selectedUser)
    }



  return (
    <>
        <ProfileChipContainer onClick={handleClickOnlineUsers}>
            <OnlineProfileChipContainer>
                <ProfileChipImage
                    src={selectedUser?.avatarImage?.image ?`data:image/svg+xml;base64,${selectedUser?.avatarImage?.image}` : 'https://api.multiavatar.com/Binx Bond.svg'}
                    alt="Profile picture"
                />
                <OnlineProfileChipBadge></OnlineProfileChipBadge>
            </OnlineProfileChipContainer>
            <ProfileChipUserName>{selectedUser?.name}</ProfileChipUserName>
        </ProfileChipContainer>
    </>
  )
}

export default OnlineProfileChip