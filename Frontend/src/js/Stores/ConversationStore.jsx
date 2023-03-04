//import packages/libraries...
import { create } from 'zustand'
import {createJSONStorage, devtools, persist} from 'zustand/middleware'




/*------------------------ Basic Settings for App`s Main Storage for Root State ------------------------*/
let setConversationStore = devtools( (set) => 
({
    currentConversation:{},
    currentOtherUser:{},
    isNewConversations:false,
    //------------------------------ Set Methods ------------------------------//
    setCurrentConversation:(cnv) => set({currentConversation:cnv}),
    setcurrentOtherUser:(cnv) => set({currentOtherUser:cnv}),
    setisNewConversations:(cnv) => set({isNewConversations:cnv}),
}))


//Create the Main Storage for Root State
const useConversationStore= create(setConversationStore)

export default useConversationStore