import { styled } from "@linaria/react";


export const LrContainer = styled.div`
display: flex;
flex-direction: row;
place-content: center;
align-items: center;
height: 100%;
gap:5rem;
padding: 4rem;
min-height:800px;


&:hover 
{
  color: blue;
}

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
background-color: #ffffff9c;
display: flex;
border-radius: 15px;
max-height: 440px;

`