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

`



//---------- SubComponent ----------//
export const InputMessageContainer = styled.div`
    padding: 10px;
    
`


//---------- SubComponent ----------//
export const MessagesBox = styled.div`
    padding: 10px;
    overflow-y: scroll;
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

export const AMessageText = styled.p`
    padding: 10px;
    border-radius: 20px;
    background-color: #1877f2;
    color: white;
    max-width: 300px;
`

export const AMessageTime = styled.div`
    font-size: 12px;
    margin-top: 10px;
`