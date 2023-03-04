//import packages/libraries...
import React, { useEffect, useState } from 'react'


//import Styles...
import { ProfileChipContainer, ProfileChipImage, ProfileChipUserName } from '../index.style';




//import Local files...
import useConversationStore from '../../../Stores/conversationStore';


function ProfileChip({accountUser,details}) 
{

    let {setcurrentOtherUser} = useConversationStore((state =>{ return state}))


    const [otherUser, setotherUser] = useState(null);

    
    useEffect(() => 
    {   
        
        (async ()=>
        {
            let otherUserid = details.members.filter((user)=>{return user !== accountUser._id })

            let response = await fetch(`${process.env.SERVER}/api/user/getUserInfo/${otherUserid}`)
            let data = await response.json()

            setotherUser(data)
        })()
    
      
    }, [])
    

    const handleConversationSelections = ()=>
    {
        setcurrentOtherUser(otherUser)
    }



  return (
    <>
        <ProfileChipContainer onClick={handleConversationSelections}>
            <ProfileChipImage
                src={otherUser?.avatarImage?.image ?`data:image/svg+xml;base64,${otherUser?.avatarImage?.image}` : 'https://api.multiavatar.com/Binx Bond.svg'}
                alt="Profile picture"
            />
            <ProfileChipUserName>{otherUser?.name}</ProfileChipUserName>
        </ProfileChipContainer>
    </>
  )
}

export default ProfileChip