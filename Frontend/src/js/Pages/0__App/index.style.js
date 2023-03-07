import { styled } from '@linaria/react';



export const Container = styled.div`
  font-family: var(--main-font);
  font-weight: 600;
  position: absolute;
  margin: 0.2rem;
  top: 26px;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(20,5%);
  grid-template-rows: 89px repeat(9,10%);

  &:hover 
  {
    border-color: yellowgreen ;
  }

`





