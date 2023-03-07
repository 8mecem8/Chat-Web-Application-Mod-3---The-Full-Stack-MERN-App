//import Packages/libaries...
import React, { useEffect } from 'react'


function authSubComponent(user) 
{
    
    /*------------------------ Check if user logged in ------------------------*/  //the logic is start app with app.jsx then check main state if we have user and check localstorage(YES it is a bad technique) if there is user !! if there is no user go to login page , if there is user but no avatar picture go to avatar selection page
     let savedUser = localStorage.getItem("User");
     if(!savedUser || !user){if(window.location.pathname !== '/login') window.location.replace('/login') };
     if(Object.keys(user).length > 2 ? !user?.avatarImage.hasAvatar : false){if(window.location.pathname !== '/avatar-select')window.location.replace("/avatar-select")}
     if(Object.keys(user).length > 2 ? user?.avatarImage.hasAvatar : false){if(window.location.pathname !== '/')window.location.replace('/')}
     

}

export default authSubComponent