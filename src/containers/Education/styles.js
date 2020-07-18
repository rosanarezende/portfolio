import styled from "styled-components"

export const EducationContainer = styled.div`
    min-height: 73vh;
    margin: 0;
    display: flex;
    color: #ffffff;
    position: relative;

    @media screen and (max-device-width: 1200px){
        flex-direction: column;
    }
`

export const Title = styled.h2`
    position: absolute;
    left: 43vw;
    top: 8vh;
    background-color: transparent;
    color: #ffffff;
    font-size: 4em;
    @media screen and (max-device-width: 1200px){
        font-size: 1.5em;
        left: 35vw;
    }
`

export const Left = styled.div`
    background-color: #e28d8c;
    min-height: 73vh;
    width: 32vw;
    padding: 25vh 4vw 6vh;

    @media screen and (max-device-width: 1200px){
        width: 100%;
        min-height: 40vh;
        padding: 16vh 5vw 5vh;
    }
`

export const Center = styled.div`
    background-color: #d9a87e;
    min-height: 73vh;
    width: 33vw;
    padding: 25vh 4vw 6vh;
    @media screen and (max-device-width: 1200px){
        width: 100%;
        min-height: 30vh;
        padding: 5vh 5vw;
    }
`

export const Rigth = styled.div`
    background-color: #f2c12e;
    min-height: 73vh;
    width: 35vw;
    padding: 25vh 4vw 6vh;
    @media screen and (max-device-width: 1200px){
        width: 100%;
        min-height: 30vh;
        padding: 5vh 5vw;
    }
`

export const SubTitle = styled.h3`
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 3vh;
    @media screen and (max-device-width: 1200px){
        font-size: 1.5em;
    }
`

export const Text = styled.div`
    font-size: 1.5em;
    margin-bottom: 1.5vh;
    @media screen and (max-device-width: 1200px){
        font-size: 1em;
    }
`

export const Line = styled.p`
    margin-bottom: 1vh;
    @media screen and (max-device-width: 1200px){
        font-size: 1em;
    }
`

export const Bold = styled.span`
    font-weight: bold;
`

export const Underline = styled.span`
    text-decoration: underline;
    font-style:italic;
`

export const ExternalLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #5a3b3b;
    font-weight: bold;
    &:hover {
        font-weight: normal;
        font-size: 1.1em;
    }
`