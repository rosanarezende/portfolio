import styled from "styled-components"

export const HireMeContainer = styled.div`
    min-height: 68vh;
    margin: 0;
    background-color: #da8b2a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 9vh 30vw;
    color: #ffffff;
    @media screen and (max-device-width: 1200px){
        padding: 5vh 5vw;
        min-height: 40vh;
    }
`

export const HireMeTitle = styled.h2`
    font-size: 5em;
    font-weight: bold;
    margin-bottom: 6vh;
    @media screen and (max-device-width: 1200px){
        font-size: 2em;
        margin-bottom: 4vh;
    }
`

export const Text = styled.p`
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 1.5vh;
    @media screen and (max-device-width: 1200px){
        font-size: 0.9em;
    }
`

export const Email = styled.span`
    font-style:italic;
    font-weight: bold;
    cursor: pointer;
`

export const SocialContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6vh;
    @media screen and (max-device-width: 1200px){
        margin-top: 4vh;
    }
`

export const SocialIcon = styled.img`
    cursor: pointer;
    width: 3vw;
    margin-right: 2vw;

    @media screen and (max-device-width: 1200px){
        width: 8vw;
        margin-right: 4vw;
    }
`
