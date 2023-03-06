import { styled } from '@linaria/react';


export const LeftBarContainer = styled.div`
   border: 3px solid blue;
   grid-column:1/4;
   grid-row: 2/11;
   margin: 0.2rem;
   white-space: pre-wrap;
   overflow-wrap: anywhere;
   display: flex;
   flex-direction: column;
   overflow: hidden;
   
   @media (max-width: 556px)
    {
        grid-column:1/21;
        grid-row: 9/11;
        
    }

`


//---------- SubComponent ----------//
export const SearchContainer = styled.div`
    padding:10px;

    @media (max-width: 556px)
    {
       display: none;
        
    }

`

//---------- SubComponent ----------//
export const ListabsContainer = styled.div`
    padding:10px;
    height: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar 
    { 
    display: none;  /* Safari and Chrome */
    background: transparent;
    }

    /* & * {display:flex;flex-direction:row;overflow-x:scroll;} */

`

//---------- SubComponent ----------//
export const ProfileChipContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    margin-top: 20px;
    z-index: 1;
    position: relative;
    font-weight:600;
    border-radius: 5px;

    &:hover 
    {
    background-color: rgb(245, 243, 243);
    }
`

//---------- SubComponent ----------//
export const ProfileChipImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;

`

//---------- SubComponent ----------//
export const ProfileChipUserName = styled.span`
   

    @media (max-width: 600px)
    {
        display: none;
    }

`


//---------- SubComponent ----------//
export const OnlineProfileChipBadge = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: limegreen;
    position: absolute;
    top: -2px;
    right: 14px;

`


//---------- SubComponent ----------//
export const OnlineProfileChipContainer = styled.span`
    position: relative;
     margin-right: 10px;

`