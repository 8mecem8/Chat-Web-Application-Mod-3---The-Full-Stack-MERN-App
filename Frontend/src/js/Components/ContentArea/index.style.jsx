import { styled } from "@linaria/react";


export const ContentAreaContainer = styled.div`
    border: 3px solid blue;
    grid-column:4/21;
    grid-row: 2/11;
    margin: 0.2rem;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media (max-width: 556px)
    {
        grid-column:1/21;
        grid-row: 2/9;
        
    }
`



//---------- SubComponent ----------//
export const InputMessageContainer = styled.div`
    padding: 10px;
    display: flex;
  

    & button{
        white-space: nowrap;
        cursor: pointer;
        padding: 10px;
        border: 2px black solid;
        border-radius: 7px;
        margin: 0px 5px;

        &:hover
        {
            box-shadow: inset 0px 0px 5px 0px #b8adad, 3px 2px 8px 0px #5f5353;
        }
        
    }
    
`


//---------- SubComponent ----------//
export const MessagesBox = styled.div`
    padding: 10px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    height: 100%;

    &::-webkit-scrollbar 
    { 
    display: none;  /* Safari and Chrome */
    background: transparent;
    }
`


//---------- SubComponent ----------//
export const AMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: ${props => props.whose};
`

//---------- SubComponent ----------//
export const AMessageTop = styled.div`
    display: flex;
`

//---------- SubComponent ----------//
export const AMessageImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

//---------- SubComponent ----------//
export const AMessageText = styled.p`
    padding: 10px;
    border-radius: 20px;
    background-color: #1877f2;
    color: white;
    max-width: 300px;
`
//---------- SubComponent ----------//
export const AMessageTime = styled.div`
    font-size: 12px;
    margin-top: 10px;
`

//---------- SubComponent ----------//
export const NoConversationText = styled.span`
    position: absolute;
    top: 20%;
    font-size: 50px;
    color: rgb(224, 220, 220);
    cursor: default;
`