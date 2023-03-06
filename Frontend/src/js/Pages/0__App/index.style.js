import { styled } from '@linaria/react';



export const Container = styled.div`
  border: 3px solid red;
  font-family: var(--main-font);
  font-weight: 600;
  position: absolute;
  margin: 0.2rem;
  top: 15px;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(20,5%);
  grid-template-rows: repeat(12,10%);

  &:hover 
  {
    border-color: yellowgreen ;
  }

`





