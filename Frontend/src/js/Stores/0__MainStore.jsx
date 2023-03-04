//import packages/libraries...
import { create } from 'zustand'
import {createJSONStorage, devtools, persist} from 'zustand/middleware'




/*------------------------ Basic Settings for App`s Main Storage for Root State ------------------------*/
let setMainStore = devtools( (set) => 
({
    theme:{},
    user:undefined,
    //------------------------------ Set Methods ------------------------------//
    setUser:(userDetails) => set({user:userDetails}),
}))

/*------------------------ Using persist to save data in the browser till we decide to delete ------------------------*/
let persisteStore = persist(setMainStore,
    {
        name: 'User', 
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({user:state.user}),
        
    })


//Create the Main Storage for Root State
const useMainStore = create(persisteStore)

export default useMainStore