import { styled } from "@linaria/react";

import {FormsDiv} from "./subComponents/AuthForms"
import bgimage from "../../../assets/asd.gif"
import bgim from "../../../assets/ufak1.jpg"

export const LrContainer = styled.div`
display: flex;
flex-direction: column;
place-content: flex-start;
align-items: center;
height: 100%;
gap:5rem;
padding: 4rem;
min-height:800px;



@media (max-width: 1000px)
{
  gap:5rem;
}
@media (max-width: 790px)
{
  gap:3rem;
}
@media (max-width: 700px)
{
  gap:1rem;
}
@media (max-width: 450px)
{
  gap:0px;
}
`


export const InputCover = styled.div`
background-image: url(${bgim}) ;
display: flex;
border-radius: 15px;
max-height: 440px;
background-size: cover;
background-attachment: fixed;
filter: sepia(1);
opacity: 0.6;
width: 169px;
transition: all 1.5s ;

&:hover
{
  width: 100%;
   ${FormsDiv}
   {
    opacity: 1;
    width: 100%;
    z-index: 1;
    transition: 0.1s;
   }
}

`


export const BgVideo = styled.video`
  position: fixed;
  height: 100%;
  border-radius: 25px;
  z-index: -1;
  opacity: 0.8;
  filter: sepia(1);
  max-height: 85%;
    
`



export const HeadCover = styled.div`
  border-radius: 25px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2
  {
    text-align: center;
    margin-top: 20px;
    font-size: 30px;
    font-size: 89px;
    font-weight: 900;
    font-variant: unicase;
  }

  > h3
  {
    margin-top: 40px;
    text-align: end;


  > span
    {
      font-weight: 800;
    }
  }
 `


export const Bgcover = styled.div`
  background-image: url(${bgimage}) ;
  background-size: cover;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  gap:5rem;
  min-height:800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 0;
  place-content: center;
`