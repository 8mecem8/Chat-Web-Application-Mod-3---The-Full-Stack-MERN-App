import { styled } from "@linaria/react";


export const ContentAreaContainer = styled.div`
    grid-column:5/21;
    grid-row: 2/11;
    margin: 0.2rem;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255,255,255,0.25);
    backdrop-filter: blur(15px);
    border:1px solid #fff;
    border-bottom: 1px solid rgba(255,255,255,0.25);
    border-right: 1px solid rgba(255,255,255,0.25);
    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
    border-radius: 20px;


    @media (max-width: 1000px)
    {
        grid-column:6/21;
    }

    @media (max-width: 812px)
    {
        grid-column:7/21;
    }

    @media (max-width: 675px)
    {
        grid-column:8/21;
    }


    @media (max-width: 585px)
    {
        grid-column:9/21;
    }


    @media (max-width: 556px)
    {
        grid-column:1/21;
        grid-row: 1/9;
        max-height: 557px;
        transform: translate(0px, 65px); 
    }
`



//---------- SubComponent ----------//
export const InputMessageContainer = styled.div`
    padding: 10px;
    display: flex;
  

     > input
    {
        border-radius: 25px;
        padding:5px;
        width:100%;
        font-family: var(--main-font) !important;
        background: rgba(255,255,255,0.25);
        backdrop-filter: blur(15px);
        border:1px solid #fff !important;
        border-bottom: 1px solid rgba(255,255,255,0.25);
        border-right: 1px solid rgba(255,255,255,0.25);
        box-shadow: 0 25px 50px rgba(0,0,0,0.1);



        ::placeholder
        {
            text-align: start;
        }

        :enabled
        {
            padding-left: 20px;
        }
    }



    & button{
        white-space: nowrap;
        cursor: pointer;
        padding: 10px;
        border-radius: 7px;
        margin: 0px 5px;
        background: rgba(255,255,255,0.25);
        backdrop-filter: blur(15px);
        border:1px solid #fff !important;
        border-bottom: 1px solid rgba(255,255,255,0.25);
        border-right: 1px solid rgba(255,255,255,0.25);
        box-shadow: 0 25px 50px rgba(0,0,0,0.1);

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
    padding: 0px 22px;

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