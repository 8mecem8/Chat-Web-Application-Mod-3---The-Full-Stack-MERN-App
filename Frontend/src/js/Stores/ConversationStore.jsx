//import packages/libraries...
import { create } from 'zustand'
import {createJSONStorage, devtools, persist} from 'zustand/middleware'




/*------------------------ Basic Settings for App`s Main Storage for Root State ------------------------*/
let setConversationStore = devtools( (set) => 
({
    allOnlineUser:[],
    userallconversations:[],
    currentConversation:{},
    currentOtherUser:{},
    isNewConversations:false,
    //------------------------------ Set Methods ------------------------------//
    setallOnlineUser:(users) => set({allOnlineUser:users}),
    setuserallconversations:(cnv) => set({userallconversations:cnv}),
    setCurrentConversation:(cnv) => set({currentConversation:cnv}),
    setcurrentOtherUser:(cnv) => set({currentOtherUser:cnv}),
    setisNewConversations:(cnv) => set({isNewConversations:cnv}),
}))


//Create the Main Storage for Root State
const useConversationStore= create(setConversationStore)

export default useConversationStore