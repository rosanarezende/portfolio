import styled from "styled-components"

export const ProjectsContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #5a3b3b;
    padding: 7.5vh 18vw;
    background-color: #FBFCFD;

    @media screen and (max-device-width: 1200px){
        flex-direction: column;
        padding: 5vh 5vw;
    }
`

export const Title = styled.div`
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
    width: 100%;
    margin-bottom: 8vh;

    @media screen and (max-device-width: 1200px){
        flex-direction: column-reverse;
        flex-direction: ${props => props.direcao};
    }
`

export const Image = styled.img`
    max-width: 24vw;
    max-height: 55vh;
    border-radius: 15px;

    @media screen and (max-device-width: 1200px){
        max-width: 60vw;
        max-height: 45vh;
        margin-top: 5vh;
    }
`

export const Model01 = styled.div`
    margin-left: 5vw;
    width: 35vw;
    @media screen and (max-device-width: 1200px){
        margin-left: 0;
        width: 85vw;
    }
`

export const Model02 = styled.div`
    margin-right: 5vw;
    width: 35vw;
    text-align: right;
    @media screen and (max-device-width: 1200px){
        margin-right: 0;
        width: 85vw;
        text-align: left;
    }
`

export const ProjectTitle = styled.div`
    font-size: 4.5em;
    font-weight: bold;
    @media screen and (max-device-width: 1200px){
        font-size: 2em;
    }
`

export const Subtitle = styled.div`
    font-size: 3em;
    margin-bottom: 2.5vh;
    @media screen and (max-device-width: 1200px){
        margin-bottom: 2vh;
        font-size: 1.5em;
    }
`

export const Text = styled.div`
    font-size: 1em;
    margin-bottom: 1vh;
    @media screen and (max-device-width: 1200px){
        font-size: 0.9em;
    }
`

export const Bold = styled.span`
    font-size: 1em;
    font-weight: bold;
    font-style:italic;
    @media screen and (max-device-width: 1200px){
        font-size: 0.9em;
    }
`

export const ExternalLink = styled.a`
    display: block;
    color: #5a3b3b;
    color: ${props => props.cor};
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 1em;
    
    &:hover {
        font-weight: normal;
        font-size: 1.1em;
        /* font-style:italic; */
    }

    @media screen and (max-device-width: 1200px){
        font-size: 0.9em;
    }
`

export const Button = styled.button`
    border: none;
    background: ${props => props.cor};
    color: #ffff;
    font-size: 1em;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
    outline: 0;

    height: 3vh;
    width: 10vw;
    margin-top: 2.5vh;

    &:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.9);
    }

    @media screen and (max-device-width: 1200px){
        font-size: 1em;
        width: 30vw;
    }
`
