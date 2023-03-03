//import packages/libraries...
import React, { useEffect, useState } from 'react'


//import Styles...
import { AvaContainer,Avatars,TitleDiv,ASButton, Avat } from './index.style'
import CircularProgress from '@mui/material/CircularProgress';

//import Local files...
import authSubComponent from '../../Components/authSubComponent'
import { FetchAvatars, setUserAvatar } from '../../Utility/AvatarFunctions';







function SelectAvatar({user,setUser}) 
{
    console.log(user)
    authSubComponent(user) //Check if user logged in 

    /*------------------------ Function's main state ------------------------*/
    const [avatars, setAvatars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);

    /*------------------------ Get Avatars ------------------------*/

    useEffect(() => {(async()=>{await FetchAvatars(setAvatars)})() ;return () => {}}, [])
    



  return (
    <>
        <AvaContainer>

            <TitleDiv>
                <h1>Pick an Avatar as your profile picture</h1>
            </TitleDiv>

            <Avatars>

                {avatars.map((avatar, i) => {

                return (
                    <Avat key={i}>
                        <img
                            src={`data:image/svg+xml;base64,${avatar}`}
                            alt="avatar"
                            key={avatar}
                            onClick={() => setSelectedAvatar([i,avatar])}
                            isselected={`${i == selectedAvatar?.[0] ? '0.4rem solid #4e0eff' : " "}`}
                            shouldscale={`${i == selectedAvatar?.[0] ? '1.6' : " "}`}
                        />
                    </Avat>
                );
                 })}

            </Avatars>

            <ASButton disabled={!selectedAvatar} isactive={ `${!selectedAvatar ? 'grayscale(1)' : " "}`} onClick={()=>{setUserAvatar(user,selectedAvatar,setUser,loading, setLoading)}}>
                 {loading ? <CircularProgress size={60} /> : 'Set as PROFILE Picture'}
            </ASButton>

        </AvaContainer>
    </>
  )
}





export default SelectAvatar