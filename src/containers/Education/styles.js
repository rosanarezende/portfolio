import styled from "styled-components"

export const EducationContainer = styled.div`
    min-height: 73vh;
    width: 100vw;
    margin: 0;
    display: flex;
    color: #ffffff;

    @media screen and (max-device-width: 1200px){
        flex-direction: column;
    }
`

export const Title = styled.div`
    position: relative;
    height: 0;
    width: 0;
    left: 42vw;
    top: 5.8vh;
    background-color: transparent;
    color: #ffffff;
    font-size: 4.5em;
    @media screen and (max-device-width: 1200px){
        font-size: 1.5em;
        left: 35vw;
        top: 3vh;
    }
`

export const Left = styled.div`
    background-color: #e28d8c;
    min-height: 73vh;
    width: 33vw;
    padding: 20vh 5vw 0;

    @media screen and (max-device-width: 1200px){
        width: 100%;
        min-height: 40vh;
        padding: 12vh 5vw 5vh;
    }
`

export const Center = styled.div`
    background-color: #d9a87e;
    min-height: 73vh;
    width: 34vw;
    padding: 20vh 5vw 0;
    @media screen and (max-device-width: 1200px){
        width: 100%;
        min-height: 30vh;
        padding: 5vh 5vw;
    }
`

export const Rigth = styled.div`
    background-color: #f2c12e;
    min-height: 73vh;
    width: 33vw;
    padding: 20vh 5vw 0;
    @media screen and (max-device-width: 1200px){
        width: 100%;
        min-height: 30vh;
        padding: 5vh 5vw;
    }
`

export const SubTitle = styled.p`
    font-size: 3em;
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
