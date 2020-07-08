import styled from "styled-components"

export const AboutContainer = styled.div`
    min-height: 75vh;
    margin: 0;
    background-color: #f2c12e;
    display: flex;
    padding: 8vh 15vw 6vh;
    color: #5a3b3b;
    position: relative;

    @media screen and (max-device-width: 1200px){
        padding: 8vh 5vw 4vh;
    }
`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    justify-content: center;
    margin-right: 4vw;

    @media screen and (max-device-width: 1200px){
        width: 95vw;
        margin: auto;
    }
`

export const AboutTitle = styled.p`
    font-size: 4em;
    font-weight: bold;
    margin-bottom: 3.5vh;

    @media screen and (max-device-width: 1200px){
        font-size: 2em;
    }
`

export const AboutText = styled.div`
    font-size: 1.5em;
    margin-bottom: 1vh;
    text-align: justify;

    @media screen and (max-device-width: 1200px){
        font-size: 1em;
    }
`

export const Underline = styled.span`
    text-decoration: underline;
    font-style:italic;
`

export const Bold = styled.span`
    font-weight: bold;
`

export const WordsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 4vh 0;
`

export const Separator = styled.span`
    font-size: 1.5em;
    background-color: #ffffff;
    color: #ffffff;
    margin-right: 0.2vw;
    @media screen and (max-device-width: 1200px){
        font-size: 1em;
        margin-right: 1vw;
    }
`

export const Word = styled.span`
    margin-right: 1vw;
    font-size: 1.5em;
    font-weight: bold;
    @media screen and (max-device-width: 1200px){
        font-size: 1em;
        margin-right: 2vw;
    }
`

export const CVButton  = styled.button`
    border: none;
    background: #04c0ad;
    color: #5a3b3b;
    font-size: 1.5em;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
    outline: 0;

    height: 5vh;
    width: 10vw;

    @media screen and (max-device-width: 1200px){
        font-size: 1em;
        width: auto;
        padding: 0 5vw;
    }
`


export const ImageContent = styled.div`
    width: 18vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-device-width: 1200px){
        display: none;
    }
`

export const Image = styled.img`
    width: 15vw;

    @media screen and (max-device-width: 1200px){
        width: 0;
    }
`