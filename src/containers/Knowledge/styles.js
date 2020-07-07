import styled from "styled-components"

export const KnowledgeContainer = styled.div`
    height: 72vh;
    width: 100vw;
    margin: 0;
    padding: 5vh 20vw;
    background-color: #04c0ad;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-device-width: 1200px){
        padding: 0 5vw;
    }
`

export const Title = styled.div`
    font-size: 3.5em;
    margin-bottom: 7vh;
    @media screen and (max-device-width: 1200px){
        margin-bottom: 1vh;
        font-size: 1.5em;
    }
`

export const KnowledgeContent = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-device-width: 1200px){
        flex-direction: column;
    }
`

export const Type = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    @media screen and (max-device-width: 1200px){
        width: 100%;
        margin: 2.5vh 0;
    }
`

export const SubTitle = styled.div`
    font-size: 5em;
    font-weight: bold;
    margin-bottom: 3.5vh;
    @media screen and (max-device-width: 1200px){
        margin-bottom: 2vh;
        font-size: 2em;
    }
`

export const Text = styled.div`
    font-size: 1.5em;
    margin-bottom: 1.5vh;
    @media screen and (max-device-width: 1200px){
        font-size: 1em;
    }
`