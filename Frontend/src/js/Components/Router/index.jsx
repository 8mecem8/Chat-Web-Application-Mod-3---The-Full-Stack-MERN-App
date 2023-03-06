//import packages/libraries...
import {createBrowserRouter,} from "react-router-dom";
import App from "../../Pages/0__App";


//import Local files...
import useMainStore from '../../Stores/0__MainStore'
import LoginVregister from '../../Pages/LoginAndRegister/index'
import SelectAvatar from "../../Pages/AvatarSelection";


/*------------------------ App's main state ------------------------*/
let {user,setUser} = useMainStore.getState(state => state) //get all properties from center State 
useMainStore.subscribe(state =>  {return user = state?.user, console.log(user,"user") }) //need subscribe to get store updates when using outside of the react component





const Router = createBrowserRouter(
[
    {path: "/",element: <App user={user} setUser={setUser}/>},
    {path: "/login",element: <LoginVregister user={user}  setUser={setUser}/>},
    {path: "/avatar-select",element: <SelectAvatar user={user} setUser={setUser} />},
]
);

export default Router