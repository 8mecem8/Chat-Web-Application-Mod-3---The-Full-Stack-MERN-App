import { styled } from '@linaria/react';



export const AvaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    background-color: #8383e8; //#83a7e8 //#83e8e6 //#e8a483
    height: 100vh;
    width: 100vw;
`


export const TitleDiv = styled.div`
    h1{color: white;font-family: 'Aeonik-Air';}
`

export const Avatars = styled.div`
    display: flex;
    gap: 2rem;
`

export const Avat = styled.div`
    border: 0.4rem solid transparent;
    padding: 0.4rem;
    border-radius: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;

    img 
    {
        height: 6rem;
        transition: 0.4s ease-in-out;
        border:${props => props.children.props.isselected };
        scale: ${props => props.children.props.shouldscale };
        border-radius: 25px;

        &:hover
        {
            scale: 1.6;
            cursor: pointer;
        }
    }
`


export const ASButton = styled.button`
    transition: 0.3s ease-in-out;
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    font-family: 'Aeonik-Air';
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    box-shadow: 1px 1px 20px 9px #4e0eff;
    filter: ${props => props.isactive};

    &:hover 
    {
      background-color: #4e0eff;
      box-shadow: 1px 1px 20px 12px #7746ff;
      scale: 1.03;
    }
`