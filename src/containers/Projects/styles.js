import styled from "styled-components"

export const ProjectsContainer = styled.div`
    min-height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #5a3b3b;
    padding: 8vh 20vw;
    background-color: #F9FAFA;
    position: relative;

    @media screen and (max-device-width: 1200px){
        flex-direction: column;
        padding: 8vh 5vw;
    }
`

export const Title = styled.h2`
    font-size: 5em;
    margin-bottom: 8vh;
    @media screen and (max-device-width: 1200px){
        margin-bottom: 4vh;
        font-size: 1.5em;
    }
`

export const Project = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 8vh;

    @media screen and (max-device-width: 1200px){
        flex-direction: column-reverse;
        flex-direction: ${props => props.direcao};
    }
`

export const Image = styled.img`
    max-width: 24vw;
    max-height: 60vh;
    border-radius: 15px;

    @media screen and (max-device-width: 1200px){
        max-width: 60vw;
        max-height: 45vh;
        margin-top: 5vh;
    }
`

export const Model01 = styled.div`
    margin-left: 5vw;
    min-width: 20vw;
    @media screen and (max-device-width: 1200px){
        margin-left: 0;
        width: 85vw;
    }
`

export const Model02 = styled.div`
    margin-right: 5vw;
    min-width: 20vw;
    text-align: right;
    @media screen and (max-device-width: 1200px){
        margin-right: 0;
        width: 85vw;
        text-align: left;
    }
`

export const ProjectTitle = styled.h3`
    font-size: 4.5em;
    font-weight: bold;
    @media screen and (max-device-width: 1200px){
        font-size: 2em;
    }
`

export const Subtitle = styled.h4`
    font-size: 3em;
    margin-bottom: 2.5vh;
    @media screen and (max-device-width: 1200px){
        margin-bottom: 1vh;
        font-size: 1.5em;
    }
`

export const Text = styled.p`
    font-size: 1.5em;
    margin-bottom: 1vh;
    @media screen and (max-device-width: 1200px){
        font-size: 1em;
    }
`

export const ExternalLink = styled.a`
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: #5a3b3b;
    font-weight: bold;
    font-size: 1em;
    &:hover {
        font-weight: normal;
        font-size: 1.1em;
    }
    @media screen and (max-device-width: 1200px){
        font-size: 0.9em;
    }
`

export const Button = styled.button`
    cursor: pointer;
    outline: 0;
    background: ${props => props.cor};
    color: #ffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 8px;
    font-size: 1em;
    height: 3vh;
    width: 10vw;
    margin-top: 2.5vh;
    &:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.9);
        font-weight: bold;
    }
    @media screen and (max-device-width: 1200px){
        font-size: 0.9em;
        width: auto;
        padding: 0 5vw;
    }
`
