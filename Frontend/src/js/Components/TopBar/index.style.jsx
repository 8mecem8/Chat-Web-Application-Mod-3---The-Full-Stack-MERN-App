import { styled } from '@linaria/react';


export const TopBarContainer = styled.div`
   margin: 0.2rem;
   overflow-wrap: anywhere;
   font-family: var(--main-font);
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   background: rgba(255,255,255,0.25);
   backdrop-filter: blur(15px);
   border:1px solid #fff;
   border-bottom: 1px solid rgba(255,255,255,0.25);
   border-right: 1px solid rgba(255,255,255,0.25);
   box-shadow: 0 25px 50px rgba(0,0,0,0.1);
   border-radius: 20px;
   padding: 10px;

`

export const TopBarCover = styled.div`
   position: relative;
   height: max-content;
   width: max-content;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

`



export const LogoContainer = styled.div`
   position: inherit;
   left: 0;
   top:0;
   display: flex;
   flex-direction: row;
   align-items: baseline;

   


   > img
   {
      width: 75px;


      @media (max-width: 558px)
      {
         width: 50px;
      }
   }
   
   > h2
   {
      font-size: 70px;
      font-weight: 900;
      font-variant: unicase;
      -webkit-text-stroke-width: 5px;
      padding-left: 5px;


      @media (max-width: 558px)
      {
         font-size: 30px;
         -webkit-text-stroke-width: 3px;
      }
   }
`



export const TopButtonsContainer = styled.div`
   height: 100%;
   align-self: flex-start;

   > button
   {
      font-weight: 600;
      font-size: 20px;
   }
`