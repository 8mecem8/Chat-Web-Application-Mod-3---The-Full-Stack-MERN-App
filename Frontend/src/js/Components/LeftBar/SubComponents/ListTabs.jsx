//import packages/libraries...
import React, { useEffect, useState } from 'react'


//import Styles...
import { PTabs, PTabsItem, PText } from '@porsche-design-system/components-react'
import { ListabsContainer } from '../index.style'



//import Local files...
import ProfileChip from './Alt_ProfileChip'
import OnlineProfileChip from './Alt_OnlineProfileChip'
import useMainStore from '../../../Stores/0__MainStore'
import useConversationStore from '../../../Stores/conversationStore'



function ListTabs() {

    /*------------------------  App`s Main Store ------------------------*/
    let {user,setUser} = useMainStore((state) => {return state}) //get all properties from center State
    let {allOnlineUser,userallconversations,setuserallconversations} = useConversationStore((state =>{ return state}))
    

    useEffect(() => 
    {
        (async ()=>
        {
            let response = await fetch(`${process.env.SERVER}/api/conversations/getAllUserConversations/${user?._id}`)
            let data = await response.json()
            setuserallconversations(data)
            setUser({...user,allConversations:data})

        })()
    }, [])
    
  return (
    <>
        <ListabsContainer>
            <PTabs>
                <PTabsItem label="Online Users">
                    {
                        allOnlineUser?.map((usr,i)=>
                        {
                           return usr.userId == user._id ? null :<OnlineProfileChip userDetails={usr} key={i}/>
                        })
                    }

                    
                </PTabsItem>
                <PTabsItem label="Messages">
                    
                    {
                        
                        userallconversations instanceof Array  ? 
                        
                        userallconversations?.map((cv,i)=>
                        {
                           return <ProfileChip accountUser={user} details={cv} key={i}/>
                        })

                        : null
                    }
                    
                </PTabsItem>
            </PTabs>
        </ListabsContainer>
    </>
  )
}

export default ListTabs