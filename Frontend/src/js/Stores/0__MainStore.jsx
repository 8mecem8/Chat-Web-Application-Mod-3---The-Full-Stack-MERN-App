//import packages/libraries...
import { create } from 'zustand'
import {createJSONStorage, devtools, persist} from 'zustand/middleware'




/*------------------------ Basic Settings for App`s Main Storage for Root State ------------------------*/
let setMainStore = devtools( (set) => 
({
    theme:{},
    user:undefined,
    bears: 0,
    //------------------------------ Set Methods ------------------------------//
    setUser:(userDetails) => set({user:userDetails}),
    removeAllBears: () => set({ bears: 0 }),
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
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